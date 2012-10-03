# PHL-Bidder v0.0.1

Get all the document URLs for an RFP on [eContract Philly](https://secure.phila.gov/eContract/). 

## Installation

Clone the repo than run 'npm install' in the directory.

## Usage

Provide the script with a contract ID for an RFP, which can be found on the New Contract Opportunities page (which can't actually be directly linked to) of eContract Philly. It's the 14 digit number in the first column of the table.

The script runs from the command line. For example: 

    $ node bidder.js 21121001155202