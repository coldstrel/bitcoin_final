# Buy / Keep / Sell recommendation BOT for Bitcoin

We decided to build a forecasting model to provide recommendations for intraday bitcoin purchase or sale.

## Why?
Cryptocurrencies are worth following nowadays. In order to build our forecasting model we will need to apply the skills learnead during the data analytics bootcamp using technologies such as SQL, Python and Machine Learning. 

## Data Source
We will be extracting data from a CSV file through:
- REFINITIV EIKON

The data will include price & volume data points for Bitcoin, in 30 minute intervals, for the last 1.5 years. Giving us 17,00 data points for each variable. This

We will use 2 financial indicators for the analysis
- MACD
- Bollinger Bands

### What are the results of our technologies
Our tool will provide 1 out of 3 outcomes:
- BUY
- KEEP
- SELL