const http = require('http')

/* CREATE SERVER OBJECT */
http
  .createServer((req, res) => {
    //Write Response
    res.write('Hello World')

    //End Response
    res.end()
  })
  .listen(5000, () => console.log('Server is running...'))
