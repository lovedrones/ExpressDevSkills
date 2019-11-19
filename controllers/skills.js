var ski11s = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update,
  };
  


  function index(req, res) {
    console.log("hit")
   res.render('skills/index', {
     sKills: ski11s.getAll(),
     title: "My Dev Skills",
     time: req.time
   })
 }

 function show(req, res) {
     res.render('skills/show', {
      sKills: ski11s.getAll(),
      title: "My Dev Skills",
      time: req.time
 });
 }
 function newSkill  (req, res) {
     res.render('skills/new')
 }
 
 function create(req, res) {
     console.log(req.body);
    //  req.body.rating = ;
     ski11s.create(req.body);
     res.redirect('/skills')
 }

 function deleteSkill(req, res) {
    console.log(req.params.id);
     ski11s.deleteOne(req.params.id);
     res.redirect('/skills')
 }  
 
 function update(req, res) {
    console.log(req.body);
    ski11s.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`)
}
