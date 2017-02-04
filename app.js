'use strict';

const express = require('express');
const app = express();
const scrapeIt = require('scrape-it');


app.get('/', function(req, res) {
	res.send('I AM THE SERVER')
})

app.get('/data', function(req, res) {
	scrapeIt(' ttp://www.indexpdx.com/new-arrival/?sort=newest', {
		kickList: {
			listItem: '.ProductList li',
			data: {
				title: '.ProductDetails a',
				price: '.ProductPriceRating em'
			}
		},
		title: 'h1',
		logo: {
			selector: '.logo',
			attr: 'src'
		}
	}).then(page => {
		let arr = page.kickList.map(obj => [obj.title, obj.price]);
		//console.log(arr)
		res.send(arr)
	});
	//res.send('HELLO WORLD')
});

app.listen(3000, function() {
	console.log('Example app is listening on port 3000')
})