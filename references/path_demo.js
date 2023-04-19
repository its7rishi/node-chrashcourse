const path = require('path')

/*  Base filename */
// console.log(path.basename(__filename))

/* Directory name */
// console.log(path.dirname(__filename))

/* Filename Extension */
// console.log(path.extname(__filename))

/* Create Path Object */
// console.log(path.parse(__filename))

/* Concatenate Paths */
console.log(path.join(__dirname, 'test', 'hello.html'))
