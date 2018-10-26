const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const { repository } = require('./config');

const { delivery, baseBranch } = repository;
const repoName = delivery.substring(delivery.lastIndexOf('/'));

// Change into the repo directory
const repoPath = path.join(__dirname, repoName);
shell.cd(repoPath);

// Checkout to base branch
shell.exec(`git checkout ${baseBranch}`);

// Get latest code on the branch
shell.exec(`git pull origin ${baseBranch}`);

// prompt for ticket ID
const ticketId = readLineSync.question('what is your ticket ID? ');
console.log(`You entered ${ticketId}`);

// create the new branch
shell.exec(`git checkout -b ${ticketId}`);
