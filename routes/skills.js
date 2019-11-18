var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);


module.exports = router;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

 // existing route above

 

//  router.get('/', function(req, res) {
//    console.log("hit")
//   res.render('skills/index', {
//     sKills: skillsDb.getAll(),
//     title: "My Dev skills"
//   })
// });

