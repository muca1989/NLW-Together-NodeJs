const express = require('express');
const app = express();


app.use(express)
app.set('views', 'views');
app.get('/', (req, res) =>{
  return req.render('index');
})

app.listen(3003,  () => {
  return console.log("server is running");
})