// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
// See docs/routes.js for advanced routing examples
 


// Documentation router
router.get('/', function(req , res){ 
  res.render('index');
});


// Branching
router.post('/reasonforcontact-answer', function (req, res) {
  let reason = req.body.reasonforcontact;

  if (reason === 'healthcare-data-query') {
    res.redirect('/contact-us/level-2-healthcare')
  } 
  else if (reason == "feedback"){
    res.redirect('/contact-us/level-2-feedback')
  }
  else if (reason == "feedback"){
    res.redirect('/contact-us/level-2-complaint')
  }
  else if (reason == "feedback"){
    res.redirect('/contact-us/level-2-pims')
  }
  else {
    res.redirect('/')
  }
});

module.exports = router;

