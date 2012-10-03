var jsdom = require("jsdom");
var request = require('request');
var jQuery = require('jquery');

// Check for contract ID
if(!process.argv[2]) {
  return console.log('Please provide a Contract ID, ex: node phl-bidder.js 21121001155202');
} else {
  var rfpId = process.argv[2];
}

request({
    // First get the opportunity list, which contains the search form
    uri:'https://secure.phila.gov/ECONTRACT/Documents/FrmOpportunityList.aspx',
    followRedirect: false
  }, function(error, response, body){
    if(error || response.statusCode != 200)
      console.log('Error on request');

    // Turn the response (the search form) into a DOM
    jsdom.env({
      html: body,
        scripts : [
          'http://code.jquery.com/jquery-1.8.2.min.js'
        ]
      }, function(err, window) {

          // Set the value of the search field to the provided contract id
          var $ = window.jQuery;

          $("#txtContractID").val(rfpId);

          var form = $('#frmOpportunityList'),
            data = form.serialize(),
            url = 'https://secure.phila.gov/ECONTRACT/Documents/FrmOpportunityList.aspx',
            type = form.attr('enctype') || 'application/x-www-form-urlencoded',
            method = form.attr('method');

          // Submit the form
          request({
              url    : url,
              method : method.toUpperCase(),
              body   : data,
              headers : { 'Content-type' : type }
            }, function(error, response, body) {
              // Turn the response (the contract details page) into a DOM
              jsdom.env({
                html: body,
                scripts: ['http://code.jquery.com/jquery-1.5.min.js']
              }, function(errors, window) {
                var $ = window.jQuery;

                // Parse out the title and URLS for all the documents
                var links = getDocLinks($('.link.linkHighlight'));
                
                // Output results to command line
                if (links.length === 0) {
                  console.log("Sorry, we couldn't find a contract with the provided ID.");
                } else {
                  console.log(links);
                }
              }
            );
          }
        );
      }
    );
  }
);

// Helpers

// Extract document titles and paths from HTML
function getDocLinks(linkSection) {
  var output = [],
    baseURL = 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=';

  linkSection.each(function(index, element) {
    output.push({
      title: jQuery(element).html(),
      url: baseURL + jQuery(element).attr('onclick').split('"')[1]
    });
  });

  return output;
}