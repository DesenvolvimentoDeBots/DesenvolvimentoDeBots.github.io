const fs = require('fs')
const mustache = require('mustache')
const jsonfile = require('jsonfile')

const template = fs.readFileSync('scripts/template.md').toString()

var data = {}
data.materiais = fs.readFileSync('source/materiais/index.md').toString()
data.telegram = jsonfile.readFileSync('source/projetos/telegram.json')
data.etc = jsonfile.readFileSync('source/projetos/etc.json')
fs.writeFileSync('README.md', mustache.render(template, data))
