var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
      if(!req.body.language){
	 res.json({
            status: 400,
            language:  null
          });
     }
      req.session['language'] = decodeURIComponent(req.body.language).substring(0,2);
      res.json({
            status: 200,
            language:  req.session['language']
          });

});


router.get('/', function(req, res, next) {
 
     if(req.session['language'] == undefined){
         req.session['language'] = 'it';
     }
     
      res.json({
            status: 200,
            language:  req.session['language']
          });

});


router.get('/getlanguages', function(req, res, next) {
      var content = templateManager.scanDir(false, 'templates');
      var status = content != false ? 200 : 404;
     
      res.json({
            status: 200,
            languages:  content
          });

});

module.exports = router;
