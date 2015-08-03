/* new: Code to get list of shares that are currently shorted*/

/*get list of companies from shorttracker.co.uk*/
var shortArray = [];
shortDataGrabber('http://shorttracker.co.uk/company');

function shortDataGrabbertest(url)
{
			var share=url.toString();			
			share=share.substring(share.indexOf("company/")+8
,share.lastIndexOf("/all"));
		console.log(share);
}

function shortDataGrabber(url)
{
/* function to grab short data and write to a file for data import */

var sjs = require('../../../src/Scraper')

/*
 Get all the links in a page.
 */
sjs.StaticScraper
	.create()
	.onStatusCode(function(code) {
		console.log(code);
	})
	.scrape(function($) {
		return $('tr').map(function() {
			return $(this).html();
		}).get();
	}, function(links) {
			links.forEach(function(link) {
			// console.log(url);
			//var share=url.toString();			
			//share=share.substring(share.indexOf("/j")+1
//,share.lastIndexOf("/placement"));
			//console.log(share);
			//var string=link.substring(link.lastIndexOf("<th>Company</th>")+1,link.lastIndexOf("</tbody>"));
			/*fix data issues*/
if (link.indexOf("0.00%") < 0)
{
var string=link;
string = string.replace(/<th>Company<\/th>[\n\r]<th>% short<\/th>[\n\r]/, "");
string = string.replace(/<td><a href="\/company\//, "");
string = string.replace(/\/all">/, ",");
string = string.replace(/<\/a><\/td>[\n\r]<td>/, ",");
string = string.replace(/%<\/td>/, "%");
string = string.replace(/[\n\r]/, "");
//console.log(link);

/* write to file */

var fs = require('fs');
fs.appendFile('companies.txt', string, function (err) {});

/* end write to file */
}

		});
	})
	.get(url);


};
