# StockInfoScraper
Tool to scrape UK share data and from various websites and output the data in a CSV file

This code contains:
+ scrapers to get price information for shares and short information on shorts


# Installing

+ You need to install scraperjs (npm install scraperjs)
+ download this from https://github.com/ruipgil/scraperjs
+ Copy the process*.js scripts to the scraperjs folder under nodejs modules

# Getting started

Get the latest data from the web on shares and shorts by running the process*.js files in this order: 
+ 1.ProcessURLsGetListOfShorts-new.js - looks for a list of shorted stock and outputs values to shorts.txt
+ 2.ProcessURLsGetStockCodesYahoo-new.js - gets the londone specific stock codes for the shorts from yahoo finance and outputs the codes to shares.txt
+ 3.ProcessURLsGetStockPricesYahoo-new.js - gets the details on the stocks found from yahoo finance and writes the details to a file.


# Usage

This is a prototype application that scrapes data, processes it and returns a results set that can be used for share price analysis. Interesting correlations in the data show a relationship between shorts and share price drops for the classes of shares selected.


# Dependencies

As mentioned above, this is an implementation of scraperjs 
+ https://travis-ci.org/ruipgil/scraperjs.svg

# License

This project is under the [MIT](./LICENCE) license. 

