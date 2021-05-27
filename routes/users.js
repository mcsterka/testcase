var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/privet', async function(req, res, next) {
  console.log('PRIVET');
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  axios.get('http://dummy.restapiexample.com/api/v1/employees')
  .then(result => res.send(result.data))
  .catch(error => console.log(error))
})

module.exports = router;
