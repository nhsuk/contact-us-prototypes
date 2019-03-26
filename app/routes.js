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

// To Level 2
router.post('/reasonforcontact-answer', function (req, res) {
  let reason = req.body.reasonforcontact;

  if (reason === 'medical-problem') {
    res.redirect('/contact-us/level-2-medicalproblem')
  } 
  else if (reason == "healthcare-data-query"){
    res.redirect('/contact-us/level-2-healthcare')
  }
  else if (reason == "feedback"){
    res.redirect('/contact-us/level-2-feedback')
  }
  else if (reason == "complaint"){
    res.redirect('/contact-us/level-2-complaint')
  }
  else if (reason == "pims"){
    res.redirect('/contact-us/level-2-pims')
  }

// To Level 3 - Healthcare Data Query
  else if (reason == "medical-records"){
    res.redirect('/contact-us/level-3-healthcare-medicalrecords')
  }
  else if (reason == "request-nhs-number"){
    res.redirect('/contact-us/level-3-healthcare-nhsnumber')
  }

 // To Level 3 - Feedback
  else if (reason == "nhsuk-website"){
    res.redirect('/contact-us/level-3-feedback-nhsukwebsite')
  }
  else if (reason == "nhs-app"){
    res.redirect('/contact-us/level-3-feedback-nhsapp')
  }
  else if (reason == "nhs-appslibrary"){
    res.redirect('/contact-us/level-3-feedback-nhsappslibrary')
  }
  else if (reason == "nhs-service"){
    res.redirect('/contact-us/level-3-feedback-nhsservice')
  }

  // To Level 3 - Complaint
  else if (reason == "complaint-nhswebsite"){
    res.redirect('/contact-us/level-3-complaint-feedback-form-nhswebsite')
  }
  else if (reason == "complaint-nhsservice"){
    res.redirect('/contact-us/level-3-complaint-nhsservice')
  }

  // To Level 4 - Feedback Form NHS Website
  else if (reason == "problem-nhswebsite"){
    res.redirect('/contact-us/level-4-feedback-form-nhswebsite')
  }
  else if (reason == "improvement-nhswebsite"){
    res.redirect('/contact-us/level-4-feedback-form-nhswebsite')
  }

  // To Level 4 - Feedback Form NHS App
  else if (reason == "problem-nhsapp"){
    res.redirect('/contact-us/level-4-feedback-form-nhsapp')
  }
  else if (reason == "improvement-nhsapp"){
    res.redirect('/contact-us/level-4-feedback-form-nhsapp')
  }

  // To Level 4 - Apps Library - Specific App
  else if (reason == "specificapp"){
  res.redirect('/contact-us/level-4-feedback-nhsappslibrary-specificapp')
  }
  // To Level 4 - Apps Library - Specific App
  else if (reason == "no-specificapp"){
  res.redirect('/contact-us/level-4-feedback-nhsappslibrary')
  }
  // To Level 4 - Feedback Form NHS Apps Library
  else if (reason == "problem-nhsappslibrary"){
    res.redirect('/contact-us/level-5-feedback-form-nhsappslibrary')
  }
  else if (reason == "improvement-nhsappslibrary"){
    res.redirect('/contact-us/level-5-feedback-form-nhsappslibrary')
  }
 
  // To Level 4 - Feedback Form NHS Service
  else if (reason == "problem-nhsservice"){
    res.redirect('/contact-us/level-4-feedback-form-nhsservice')
  }
  else if (reason == "improvement-nhsservice"){
    res.redirect('/contact-us/level-4-feedback-form-nhsservice')
  }

  else {
    res.redirect('/contact-us/')
  }
});

//router.get('/contact-us/level-3-feedback-nhsukwebsite2', function (req, res) {
//    var reason = req.reason;
//});

module.exports = router;

