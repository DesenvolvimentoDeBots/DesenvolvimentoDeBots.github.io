const path = require('upath')
const fs = require('fs')
const parser = require('ignored')
const chokidar = require('chokidar')

// A list of `anymatch` patterns for chokidar to ignore when juicing a directory
// https://www.npmjs.com/package/anymatch

module.exports = function(sourceDir, targetDir) {
	var ignores = [
		//targetDir,
		//path.join(targetDir, '/**'), // target directory (in case it's inside the source directory.. inception!)
		/\/\./, // hidden files
		/node_modules/,
		/redirects\.json/,
		/npm-debug\.log/,
	]

	//Ignore everything in the source directory's .jusignore file.
	var jusIgnore = path.join(sourceDir, '/.jusignore')
	if (fs.existsSync(jusIgnore)) {
		parser(jusIgnore).forEach(pattern => {
			console.log(pattern)
			ignores = ignores.concat(pattern.replace(/^/gm, '**/'))
		})
	}
	console.log(ignores)
	return ignores
}

/*
var sourceDir = '/home/tiago/Documents/GIT/TiagoDanin/TiagoDanin.github.io/'
var targetDir = '/home/tiago/Documents/GIT/TiagoDanin/TiagoDanin.github.io/dist/'
chokidar.watch(sourceDir, {ignored: ignored(sourceDir, targetDir)})
	.on('add', (filename) => console.log(filename))
	.on('change', (filename) => console.log(filename))
	.on('unlink', (filename) => console.log(filename))
	.on('ready', () => {
		console.log("Ok")
	})
*/
