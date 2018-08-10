const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let jugglingBalls = req.session.data['juggling-balls']

  if (jugglingBalls === '3 or more') {
    res.redirect('/juggling-trick')
  } else {
    res.redirect('/ineligible')
  }
})


module.exports = router
