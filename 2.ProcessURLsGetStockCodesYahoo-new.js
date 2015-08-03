/* Code to get share information from isins */

/*
we only have the isin so need to get the epic then share data
Psudocode is as follows:
get list of share isins from file
get stock data from a url like this:
https://uk.finance.yahoo.com/lookup;?s=GB00B6WVD707
strip the string that looks like this >UTW.L<
get share data with a string like this
output parsed details to yahooshares.txt file for processing
*/

// enter stat and end dates for historic data
var startdate= '1-Apr-15'
var enddate='' //blank = today
var shareArray = [];
var epic = '';

fs = require('fs')
fs.readFile('companies.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  shareArray = data.split(/\r\n|[\n\r\u0085\u2028\u2029]/g);
  shareArray.forEach(logArrayElements);
});

function logArrayElements(element, index, array) {
if (element != '')
{
  console.log('a[' + index + '] = ' + element);
  epic = element;
  epic = epic.substring(0,epic.indexOf(","));
  console.log(epic);
shareDataGrabber('https://uk.finance.yahoo.com/lookup;?s='+epic, element);
}
}

function shareDataGrabbertest(url)
{
// get substring of epic value
			var share='href="https://uk.finance.yahoo.com/q;_ylt=ApQV.URbj4oE1nipKwDE325dsLFG;_ylu=X3oDMTFhNGtyZjJhBHBvcwMxMQRzZWMDeWZpU3ltYm9sTG9va3VwUmVzdWx0cwRzbGsDdXR3bA--?s=UTW.L" >UTW.L<';	
			share=share.substring(share.lastIndexOf(".L<")-5,share.lastIndexOf(".L<")+2);	
			share=share.substring(share.indexOf(">")+1 ,share.length);	
			console.log(share);
}

function shareDataGrabber(url, element)
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

	if (allText.indexOf(".L") > -1)
	{
	var share=allText;	
			share=share.substring(share.lastIndexOf(".L<")-5,share.lastIndexOf(".L<")+2);	
			share=share.substring(share.indexOf(">")+1 ,share.length);	
			console.log(share);

/* write to file */

var fs = require('fs');
fs.appendFile('yahooshares.txt', share + "," + element + '\r\n', function (err) {});

/* end write to file */

        }

};

}

