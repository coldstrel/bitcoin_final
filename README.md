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

We are currently developing the data visualization and and testing the alert prediction and confirmation model.

## Machine Learning Model

1. Description of preliminary data preprocessing.

For code testing and model testing, the change was made to obtain real-time data directly from the Binance API.

For our analysis we have decided to work with 6 months of historical prices with a 30-minute snap.

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/Database.PNG)

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

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/Price%20history.PNG)

2. Description of preliminary feature engineering and preliminary feature selection, including their decision-making process.

Supervised learning techniques were applied in order to make predictions on BTC cryptocurrency prices.

For our analysis it was decided to work with two Machine Learning models and decide which one is more optimal for data prediction; Linear Regression and Random Forest.

In the case of linear regression, the aim was to "draw a line" which will indicate the trend of the data set, that is, to automatically obtain the line we are looking for with the prediction trend.
In the case of random forests, the aim is to define a prediction model based on decision trees, which reflect the way in which the problems can be broken down and the sequence of the decision process.

3. Description of how data was split into training and testing sets.

To test the effectiveness of the model, a training set and a test set were created, 85% of the oldest data were used as training data and the remaining 15 as test data.

4. Explanation of model choice, including limitations and benefits.

It was decided to work with the linear regression model. The reason for choosing this model was that the purpose of the project is to launch a buy or sell alert based on the behavior of the future price with a window of 8 hrs and we identified that in the short term the prices adjust perfectly to a straight line, achieving an adjustment of 84%.

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/r2.PNG)

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/Linear%20regression.PNG)

Advantages and disadvantages:

### Linear Regression Model

Among the advantages we can mention that the model is the simplest version of prediction.

The behavior of prices does not fit perfectly to a line, so the confidence in the predictions can be low.

5. Description of how they have trained the model thus far, and any additional training that will take place

The model is being updated every 8 hrs, to confirm if our buy or sell alert signal was fulfilled.

How do we perform this validation?

1. We update our database.
2. From this data we obtain the future prices at 30 minute intervals for the next 8 hrs.
3. With the future data we run the MACD and Bollinger Band indicators to confirm if there will be a change in the trend and the strength of the trend, which triggers a buy or sell alert 8 hrs before the price change.

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/MACD.PNG)

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/bb.PNG)

4. After 8 hours we obtain the actual prices of our prediction and confirm how well our prices matched reality.
5. With the new update we also get the new future prices to continue testing the model.

![img](https://github.com/coldstrel/bitcoin_final/blob/Carmen/Resources/predicted_prices.PNG)
