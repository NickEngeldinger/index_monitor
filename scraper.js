'use strict';

const scrapeIt = require('scrape-it');

scrapeIt(' http://www.indexpdx.com/new-arrival/?sort=newest', {
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
	console.log(arr)
})
console.log(arr)
//WIRE THIS UP TO EXPRESS
//WHEN GET REQUEST SENT PERFORM SCRAPE AND RETURN RESULTS