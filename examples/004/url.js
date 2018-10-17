const url = require('url');
const querystring = require('querystring');

const args = process.argv.slice(2);
const [urlEntered] = args;

if ( urlEntered === undefined ) {
	console.error('Please pass in a URL on the command line');
	process.exit(1);
}

const {
	protocol, slashes, host, query, href
} = url.parse(urlEntered);

console.log(`Protocol: ${protocol}`);
console.log(`Using slashes: ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query string: ${query}`);
console.log(`HREF: ${href}`);

const parsedQuery = querystring.parse(query);
console.log(`query is: ${parsedQuery.q}`);
