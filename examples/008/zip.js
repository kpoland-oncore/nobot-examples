const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const ZLIB_BEST_COMPRESSION = 9;
// create a file to stream the archive(zip) data to
const zipPath = path.join(__dirname, 'files.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
	zlip: { level: ZLIB_BEST_COMPRESSION }
});

// listen for all archive data to be written
output.on('close', () => {
	console.log(`Total bytes: ${archive.pointer()}`);
	console.log('archiving complete');
});

// catch any errors that occur when creating the archive
archive.on('error', (err) => {
	throw err;
});

archive.pipe(output);

//add files to the archive, and give them different names in the archive
const textPath = path.join(__dirname, 'copy.txt');
const logoPath = path.join(__dirname, 'logo.jpg');
archive.append(fs.createReadStream(textPath), { name: 'content.txt' });
archive.append(fs.createReadStream(logoPath), { name: 'nobot.jpg' });

// finalize the archive, i.e. nothing else to append
archive.finalize();
