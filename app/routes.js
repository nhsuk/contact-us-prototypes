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
    res.redirect('/level-2-healthcare')
  } else {
    res.redirect('/fb')
  }
});

module.exports = router;

