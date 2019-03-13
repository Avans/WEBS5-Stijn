var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:color', function(req, res, next) {
  res.render('index', { color: req.params.color });
});

module.exports = router;
