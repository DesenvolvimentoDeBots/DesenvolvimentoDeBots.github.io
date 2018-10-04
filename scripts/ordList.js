const jsonfile = require('jsonfile')

const files = [
	'source/projetos/telegram.json',
	'source/projetos/etc.json'
]

function ordList(file) {
	var data = jsonfile.readFileSync(file)
	var type = 'name'
	data.sort((a, b) => {
		var indexA = a[type].toString().toUpperCase()
		var indexB = b[type].toString().toUpperCase()
		if (indexA < indexB) { return -1 }
		if (indexA > indexB) { return 1  }
		return 0
	})
	jsonfile.writeFileSync(file, data, {spaces: 2})
}

files.forEach(file => {
	ordList(file)
})
