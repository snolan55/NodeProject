const express = require('express');
const router = express.Router();
const courses = require('../../Courses');
var results = require('../../Results');

//router.get('/', (req, res) => res.json(courses));

router.post('/:forms', (req, res) => {
  var selForm = req.body.selectForm;
  var myObj = {"forms": [false, false, false, false, false, false, false, false, false]};
  for (i=0; i < myObj.forms.length; i++){

    if(selForm == i){
      myObj.forms[i] = true;

    }}

  res.render('index', {
    title: 'Courses App',
    courses, results, myObj
  })

})
module.exports = router;
