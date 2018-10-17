const os = require('os');

const homeDirectory = os.homedir();
console.log(`The home directory is: ${homeDirectory}`);

const osPlatform = os.platform();
console.log(`The OS platform is: ${osPlatform}`);

console.log("another cut at platform is " + os.platform());

console.log("I can see your " + os.cpus()[0].model + " has " + os.cpus().length + " honking CPUs");
