require('colors');
const readLineSync = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');

const GAME_TEMPLATES = 'game-templates';
const NO_CHOICE_MADE = -1;

// 1. use a game template already built
const templatesDir = path.join(__dirname, GAME_TEMPLATES);
const templates = fse.readdirSync(templatesDir);

const index = readLineSync.keyInSelect(templates);
if ( index === NO_CHOICE_MADE ) {
	process.exit(0);
}

// 2. create a new project reskin based on the template
const projectName = readLineSync.question('What is the name of your new game? ', {
	limit: input => input.trim().length > 0,
	limitMessage: 'The project has to have a name, try again'
});

const confirmCreateDirectory = readLineSync.keyInYN(`You entered '${projectName}', create a directory with this name?`);

// 3. if ready to create, copy the template to the new location and name
if ( confirmCreateDirectory ) {
	const template = templates[index];
	const src = path.join(templatesDir, template);
	const destination = path.join(__dirname, projectName);
	// code should probably check to see if the directory exists first, because without checking it silently overwrites it
	fse.copy(src, destination)
		.then(() => console.log(`Successfully created ${destination}`.green))
		.catch(err => console.error(err));
} else {
	console.log('Aborted creating a new game');
}

