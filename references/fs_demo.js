const fs = require('fs')
const path = require('path')

/* Create Folder */
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err
//   console.log('Folder created...')
// })

/* Create and write to a file */
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Written with NodeJs',
//   (err) => {
//     if (err) throw err
//     console.log('File written to...')
//   }
// )

/* File Append */
// fs.appendFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   ' Learning NodeJs is fun!!!',
//   (err) => {
//     if (err) throw err
//     console.log('File appended...')
//   }
// )

/* Read File */
// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data)
//   }
// )

/* Rename File */
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err) => {
    if (err) throw err
    console.log('File renamed...')
  }
)
