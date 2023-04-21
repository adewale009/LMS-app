const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;



















































// reuse

// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// const Class = require("../model/class");

/* GET home page. */
// router.get('/', function(req, res, next){
//   Class.getClasses(function(err, classes){
//   res.send('index', { classes: classes },3);
//   });
    // {res.render('index', { classes: classes})},3);
// });

// router.get('/', function(req, res, next){
//   Class.find({})(function(err, classes){
//   res.render('index', { classes: classes },3);
//   });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// Class.getClasses(function(err, classes))

// module.exports = router;

