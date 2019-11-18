var skillsDb = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
  };
  
  function index(req, res) {
    console.log("hit")
   res.render('skills/index', {
     sKills: skillsDb.getAll(),
     title: "My Dev skills",
     time: req.time
   })
 }

 function show(req, res) {
     res.render('skills/show', {
     sKills: skillsDb.getOne(req.params.id),
     skillNum: parseInt(req.params.id) +1
 });
 }
 function newSkill  (req, res) {
     res.render('skills/new')
 }
 function create(req, res) {
     console.log(req.body);
     req.body.done = false;
    //  skill.create(req.body);
     res.redirect('/skills')
 }