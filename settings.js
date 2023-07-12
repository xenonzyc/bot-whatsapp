const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6283173078178'] // ganti nomor wa lu
global.bugrup = ['6283173078178'] // ganti nomor wa lu
global.packname = '7All' 
global.author = 'YT : L'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

// SILAHKAN SETTING SESUAI PERINTAH //