const devSkills = [
    {skills: 'typing', rating: 7},
    {skills: 'javascript', rating: 5},
    {skills: 'resourceful', rating: 8}
  ];
  
  module.exports = {
    getAll, 
    getOne,
    create
  };
  
  function getAll() {
    return devSkills;
  }

  function getOne(id) {
    return devSkills[id];
  }

  function create(skill) {
    devSkills.push(skill)
  }