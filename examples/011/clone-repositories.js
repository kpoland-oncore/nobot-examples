require('colors');
const path = require('path');
const shell = require('shelljs');
const { repositories } = require('./config');

const repositoriesDirectory = path.join(__dirname, 'my-repos');

function cloneRepositories(repositoryPath, repositoryList = []) {
	const repositoryCount = repositoryList.length;

	if ( ! repositoryPath || repositoryCount === 0 ) {
		console.log('Invalid path or repository list');
		return;
	}

	console.log(`Clone repositories to: ${repositoryPath}`);

	shell.cd(repositoryPath);

	repositoryList.forEach((repositoryUrl, index) => {
		console.log(`Cloning ${index + 1} of ${repositoryCount}`.cyan);
		shell.exec(`git clone ${repositoryUrl} --progress -b master`);
	});

	console.log(`Completed cloning repos`.green);
}

cloneRepositories(repositoriesDirectory, repositories);
