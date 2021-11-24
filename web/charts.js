function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  
  function buildCharts(sample){
      barChart(sample);
      bubbleChart(sample);
      gaugeChart(sample);
  }
  
  // 1. Create the buildCharts function.
  function barChart(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      var metadata = data.samples;
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      //  5. Create a variable that holds the first sample in the array.
      var result = resultArray[0];
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuID = result.otu_ids;
      var topOtu = otuID.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
      var otuLabels = result.otu_labels;
      var sampleLabels = result.sample_values;
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
      var yticks = topOtu;
      // 8. Create the trace for the bar chart. 
      var barData = [
        { 
          y: yticks,
          x: sampleLabels.slice(0,10).reverse(),
          text: otuLabels.slice(0,10).reverse(),
          type: 'bar' ,
          orientation: 'h'
        }
      ];
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found"
      };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout);
    });
  }
  
  
  // Bubble Charts
  // Create the buildCharts function.
  function bubbleChart(sample) {
    // Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      var metadata = data.samples;
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      //  5. Create a variable that holds the first sample in the array.
      var result = resultArray[0];
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuID = result.otu_ids;
    
      var topOtu = otuID.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
      var otuLabels = result.otu_labels;
      var sampleLabels = result.sample_values;
  
      // 1. Create the trace for the bubble chart.
      var bubbleData = [
        {
          x: topOtu,
          y: sampleLabels,
          text: otuLabels,
          mode: "markers",
          marker: {
            color: otuID,
            size: sampleLabels
          }
        }
      ];
  
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        //margin: {t:0},
        xaxis:{title:"ID's"},
        title: "Bacteria Cultures per Sample",
      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble",bubbleData, bubbleLayout); 
    });
  }
  
  // Create the buildChart function.
  function gaugeChart(sample) {
    // Use d3.json to load the samples.json file 
    d3.json("samples.json").then((data) => {
  
      // Create a variable that holds the samples array. 
      var metadata = data.samples;
      // Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // 1. Create a variable that filters the metadata array for the object with the desired sample number.
      var filteredMetadata = data.metadata.filter(sampleObj => sampleObj.id == sample);
      // Create a variable that holds the first sample in the array.
      var result = resultArray[0];
      // 2. Create a variable that holds the first sample in the metadata array.
      var resultMetadata = filteredMetadata[0];
      // Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuID = result.otu_ids;
      var topOtu = otuID.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
  
      var otuLabels = result.otu_labels;
      var sampleLabels = result.sample_values;
  
      // 3. Create a variable that holds the washing frequency.
      var wfreq = parseFloat(resultMetadata.wfreq);
      // Create the yticks for the bar chart.
      var yticks = topOtu;
      // 4. Create the trace for the gauge chart.
      var gaugeData = [
        {
          domain: {x:topOtu ,y:sample},
          value: wfreq,
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            bar:{color: "#46484C"},
            steps: [
              { range: [0, 2], color: "#688D15" },
              { range: [2, 4], color: "#4C6515" },
              { range: [4, 6], color: "#394A16" },
              { range: [6, 8], color: "#273016" },
              { range: [8, 10], color: "#FA2D2D" }
            ]
          }
        }
      ];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
        title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
      };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge",gaugeData,gaugeLayout);
    });
  }