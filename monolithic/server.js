const express = require('express')

express()
  .get('*', (req, res) => {
    res.send('OK!  @' + new Date().toISOString())
  })
  .listen(6030, err => {
    if (err) {
      console.error(err)
    }

    console.log('Server listening on port 6030...')
  })
