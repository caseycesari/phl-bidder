# PHL-Bidder v0.0.1

Get all the document URLs for an RFP on [eContract Philly](https://secure.phila.gov/eContract/). 

## Installation

Clone the repo than run 'npm install' in the directory.

## Usage

Provide the script with a contract ID for an RFP, which can be found on the New Contract Opportunities page (which can't actually be directly linked to) of eContract Philly. It's the 14 digit number in the first column of the table.

The script runs from the command line. For example: 

    $ node bidder.js 21121001155202

And the output: 

    [ { title: 'General Requirements',
        url: 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=211210011552020211210011621271N&ext=xlsx' },
      { title: 'IT Requirements',
        url: 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=211210011552020211210011622021N&ext=xlsx' },
      { title: 'Open ended Questions',
        url: 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=211210011552020211210011622401N&ext=docx' },
      { title: 'Shared IT Infrastructure',
        url: 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=211210011552020211210011623391N&ext=docx' },
      { title: 'RFP Proposal',
        url: 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=211210011552020211210011624271N&ext=pdf' },
      { title: 'OEO Form',
        url: 'https://secure.phila.gov/ECONTRACT/Documents/frmPDFWindow.aspx?docid=211210011552020211210011627071N&ext=xlsx' } ]

