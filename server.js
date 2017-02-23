const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://rahulsiq:y8cs1069@ds157539.mlab.com:57539/shoppingcartsiq', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  db.collection('EmployeeDetails').find().toArray(function(err, results) {
    console.log(results)
    res.render(__dirname + "/index.html", {result:results})
    // send HTML file populated with quotes here
  })
})

app.post('/EmployeeDetails', (req, res) => {
  db.collection('EmployeeDetails').save(req.body, (err, result) => {
    if (err) return console.log(err)
    //res.json(JSON.stringify(result))
    console.log('saved to database')
    res.redirect('/')
  })
})
/*
exports.closeServer = function(){
  server.close();
};
*/