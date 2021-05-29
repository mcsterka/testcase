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
router.post('/employee', async function(req, res, next) {
  console.log('PRIVET2');
  console.log('req:', req.body);
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  let result;
  result = await axios.post("http://dummy.restapiexample.com/api/v1/create", req.body)
  console.log("RESULT:", result.data.data);
  let getAll;
  getAll = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
  console.log("GETALL:", getAll.data.data);
  res.send(getAll.data);
  // setTimeout(axios.post("http://dummy.restapiexample.com/api/v1/create", req.body)
  // .then(reslut => {
  //   setTimeout(axios.get('http://dummy.restapiexample.com/api/v1/employees')
  //   .then(result => res.send(result.data))
  //   .catch(function(error){
  //     console.log(error);
  //     return res.send(error);
  //   }), 3000)
  // })
  // .catch(function(error){
  //   console.log(error);
  //   return res.send(error);
  // }), 3000)
})

module.exports = router;
