/* Code to get share prices from epics */

/*
Psudocode is as follows:
get list of share epics from file
get stock data from a url like this:
http://finance.yahoo.com/d/quotes.csv?s=UTW.L+QP.L&f=snom6j1s7ee7j6k5
write to file for the following fields:
symbol	name	price	Percent Change From 200 Day Moving Average	Market Capitalization	Short ratio	EPS	EPS estimated current year	% from low	% from high
*/

// enter stat and end dates for historic data
var startdate= '1-Apr-15'
var enddate='' //blank = today
var shareArray = [];
var epic = '';
var epicstring = '';

fs = require('fs')
fs.readFile('yahooshares.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  shareArray = data.split(/\r\n|[\n\r\u0085\u2028\u2029]/g);
  shareArray.forEach(logArrayElements);
// get rid of an unwanted plus
epicstring = epicstring.replace('+','');
console.log(epicstring);
// write the file with the share details
shareDataGrabber("http://finance.yahoo.com/d/quotes.csv?s=" + epicstring + "&f=snom6j1s7ee7j6k5");
});

function logArrayElements(element, index, array) {
if (element != '')
{
  console.log('a[' + index + '] = ' + element);
  epic = element;
  epic = epic.substring(0,epic.indexOf(","));
  console.log(epic);
 epicstring = epicstring + "+" + epic;
//shareDataGrabbertest('https://uk.finance.yahoo.com/lookup;?s='+epic, element);
}
}

function shareDataGrabbertest(url)
{
			console.log(url);
}

function shareDataGrabber(url)
{
/* function to grab share data and write to a file for data import */

/*
 Get all the data.
 */
var request = require("request");

request(url, function (error, response, body) {
    if (!error) {
        parsehtml(body);
    } else {
        console.log(error);
    }
});

var parsehtml = function(allText) {

/* write to file */

var fs = require('fs');
fs.appendFile('yahoosharesdata.txt', allText, function (err) {});

/* end write to file */

};

}

