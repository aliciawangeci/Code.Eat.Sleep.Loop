"use strict";

let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Good");
	}, 2000);
});

let myPromise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Good - the second promise");
	}, 1000);
});

Promise.all([myPromise, myPromise2])
	.then(res => {
		console.log(res);
	})
	.catch(err => console.log(err));
