'use strict';


const express = require('express');
const app = express();

const PORT = 5555;

//read from external json
const fs = require('fs');
let rawdata = fs.readFileSync('produk.json');  
let produk = JSON.parse(rawdata);  

var authString = 'Basic eW91cmxvZ2luOnlvdXJwYXNzd29yZA==';

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // console.log(`PRODUK ${rawdata}`);
});

app.get('/product', (req, res, next) => {

	if(req.headers.authorization != authString ){
		res.status(401).send('Authentication required.')
	}

    res.json(produk);
});

app.get('/download', function(req, res){
  const file = `${__dirname}/produk.json`;

  if(req.headers.authorization != authString){
		res.status(401).send('Authentication required.')
	}

  res.download(file); // Set disposition and send it.
});

module.exports = {
    app
};