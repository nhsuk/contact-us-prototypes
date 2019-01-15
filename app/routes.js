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

  if (reason === 'healthcare-data-query') {
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
  else if (reason == "personal-medical-enquiry"){
    res.redirect('/contact-us/level-3-healthcare-medicalenquiry')
  }

 // To Level 3 - Feedback
  else if (reason == "nhsuk-website"){
    res.redirect('/contact-us/level-3-feedback-nhsukwebsite')
  }
  else if (reason == "nhs-app"){
    res.redirect('/contact-us/level-3-feedback-nhsukwebsite2?reason=nhs-app')
  }
  else if (reason == "nhs-service"){
    res.redirect('/contact-us/level-3-feedback-nhsukwebsite2')
  }

  else {
    res.redirect('/')
  }
});

router.get('/contact-us/level-3-feedback-nhsukwebsite2', function (req, res) {
    var reason = req.reason;
});

module.exports = router;

