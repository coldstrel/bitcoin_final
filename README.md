## Selected topic

> **Recommendation to buy, sell or hold Bitcoin**
*Using Machine Learning*

## Reason why they selected their topic

> The cryptocurrency market now worth more than $2 trillion has attracted the attention of investors. It is not too late to enter this world. It has been decided to work with the BTC cryptocurrency as it has a unique advantage to the rest being the first cryptocurrency to appear on the market and has managed to create a global community and give rise to a whole new industry of millions of enthusiasts who create, invest, trade and use Bitcoin and other cryptocurrencies in their daily lives. BTC remains at the top of this market after more than a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that surpassed the $1 trillion mark in 2021, after Bitcoin's price reached an all-time high of $64,863.10 on April 14, 2021.
> *When is the best time to buy or sell? Should I hold on to my portfolio?* This is every investor's dilemma and with the application of machine learning models, we are likely to get the information we need to know the future of cryptocurrencies.

## Description of the communication protocols

During the development of this project, the roles of the team have been exchanged (square, triangle, circle, X) to ensure that each of the members participate in each stage of the project.

In addition to the classroom sessions, 2 to 3 sessions are held with the team to review progress and doubts that are presented to us, the additional sessions are conducted through google meet.

Each modification of the database, python file, index file, etc. are uploaded to Github for an easier review by each team member.

## Outline of the project

The project is developed in 5 stages:

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/Outline_of_the_project.PNG)

We are currently developing the data visualization and testing of the Machine Learning model.

## Machine Learning Model

1. Description of preliminary data preprocessing.

The data was extracted to a CSV file from the data source (this form of data extraction will be changed to export the data using the Refinitiv Eikon API).

For our analysis it was decided to work with a price year with a 1-hour snap.

Subsequently, the pandas library was used to load and analyze the data.

The steps to follow for the preliminary processing of the data were:

- Create a Data Frame with the loaded data.
- Review the data types in each loaded column.
- Review of null fields.
- Change the data type to suit our needs.
- Setting dates as the index.
- Check correlation between the data.
- Perform a detailed analysis of the data (count, mean, std, min, 25%, 50%, 75% and max).
- Using the Pyplot library, BTC prices are plotted graphically.

2. Description of preliminary feature engineering and preliminary feature selection, including their decision-making process.

Supervised learning techniques were applied in order to make predictions on BTC cryptocurrency prices.

For our analysis it was decided to work with two Machine Learning models and decide which one is more optimal for data prediction; Linear Regression and Random Forest.

In the case of linear regression, the aim was to "draw a line" which will indicate the trend of the data set, that is, to automatically obtain the line we are looking for with the prediction trend.
In the case of random forests, the aim is to define a prediction model based on decision trees, which reflect the way in which the problems can be broken down and the sequence of the decision process.

The model will be evaluated by validating the Root-mean-square deviation (RMSE), Mean absolute error (MAE), Mean absolute percentage error (MAPE) and the coefficient of determination (R2).

3. Description of how data was split into training and testing sets.

To test the effectiveness of the model, a training set and a test set were created, 80% of the oldest data were used as training data and the remaining 20 as test data.

4. Explanation of model choice, including limitations and benefits.

Models are being trained in the choice of the correct model.

Advantages and disadvantages:

### Linear Regression Model

Among the advantages we can mention that the model is the simplest version of prediction.

The behavior of prices does not fit perfectly to a line, so the confidence in the predictions can be low.

### Random Forest

Among the advantages we could mention that it produces good prediction results quickly, a large number of input variables can be used, overfitting is avoided if there are enough trees in the model and it facilitates an estimation of the most important values in the classification.

The main disadvantages are that it may require a long training time and the use of large amounts of information may slow down the model for prediction purposes.