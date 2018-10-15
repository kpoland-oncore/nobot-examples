const args = process.argv.slice(2);
const name = args[0];

if ( name === undefined ) {
	console.error('Please pass a name, e.g. node hello.js anakin');
	process.exit(1);
}

console.log("Good day to you " + args);
console.log(`Good morning to you ${name}`);
