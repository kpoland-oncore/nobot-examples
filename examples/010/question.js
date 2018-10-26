const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');

const onProjectInput = (name) => {
	interfaceInstance.close();
	stdin.destroy();
	createProjectDirectory(name);
};

const createProjectDirectory = (enteredName) => {
	const name = enteredName.trim();
	if ( name === '' ) {
		console.log('Canot create a project without a name.');
		process.exit(1);
	}
	const projectPath = path.join(__dirname, name);
	if ( fs.existsSync(projectPath) ) {
		console.log(`${name} directory already exists`);
		process.exit(1);
	}
	console.log(`Creating a new project called ${name}`);
	fs.mkdirSync(projectPath);
};

const interfaceInstance = readline.createInterface(stdin, stdout);
interfaceInstance.question('what is the name of your project? ', onProjectInput);


