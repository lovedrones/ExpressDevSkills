const devSkills = [
    {skills: 'Typing', level: 'Novice'},
    {skills: 'Javascript', level: 'Beginner'},
    {skills: 'Resourceful', level: 'Expert' }
  ];
  
  module.exports = {
    getAll, 
    getOne,
    create,
   deleteOne,
   update
  };
  
  function update(id, skills) {
    devSkills.splice(id, 1, skills)
  }

  function deleteOne(id) {
    devSkills.splice(id, 1);
  }

  function create(skills) {
    devSkills.push(skills)
  }

  function getAll() {
    return devSkills;
  }

  function getOne(id) {
    return devSkills[id];
  }