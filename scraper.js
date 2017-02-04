'use strict';

const scrapeIt = require('scrape-it');
const jsonfile = require('jsonfile');
const fs       = require('fs');

const d = new Date();
const newFile = `data/${d.getMonth()+1}_${d.getDate()}_${d.getFullYear()}_kicks.json`;

const dataDir = './data/';
var newFilename = '2_2_2017_kicks.json';

var dataArr = [{"title":"NIKE TRAINER 1.2 MID OREGON","price":"$300.00 +"},{"title":"AIR JORDAN 9 RETRO OREGON","price":"$1,200.00 +"},{"title":"JORDAN MELO M10 OREGON PE","price":"$500.00 +"},{"title":"AIR JORDAN XX9 (29) OREGON DUCKS PE","price":"$2,500.00 +"},{"title":"AIR FOAMPOSITE ONE PRM UO QS OREGON DUCK (SIZE 9.5)","price":"$500.00 +"}];
//this compares names but we want to compare contents
function compareFiles(filename) {
	newFilename === filename ? console.log('THEY MATCH') : console.log('THE DO NOT MATCH');
}
function compareContents(fileContents) { 
	fileContents === dataArr ? console.log('CONTENTS MATCH') : console.log('NO MATCH');
}
fs.readdir(dataDir, (err, files) => err ? console.log(err) : compareFiles(files[0]));
fs.readFile(dataDir + newFilename, 'utf8', (err, data) => {
	err ? console.log(err) : console.log(data);
});

/*
scrapeIt('http://www.indexpdx.com/search.php?search_query=oregon', {
	kickList: {
		listItem: '.ProductList li',
		data: {
			title: '.ProductDetails a',
			price: '.ProductPriceRating em'
		}
	}
}).then(page => {
	//Read contents of json file, if different from this scrape then save the new scrape
	//and delete the old one	
	jsonfile.writeFile(newFile, page.kickList, function(err) {
		console.log(err)
	})
});*/

