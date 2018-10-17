const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?' +
	'myName=Kyle&myAge=49&comment=Wherever+you+go+there+you+are.';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`I am ${parsedUrl.myName}`);
console.log(`I have been around ${parsedUrl.myAge} fabulous years`);
console.log(`And my motto is ${parsedUrl.comment}`);
