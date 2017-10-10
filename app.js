const express = require('express');

const app = express();
app.get('/', function(req, res){
    res.send('hello world');
  });
  
app.listen(3000, () => {
    console.info('Server is listen on 3000 port');
});