const db = require('../models');

// let User_post = function (req,res) {
//   let data = req.body;
//   console.log(req.body)
//   db.User.create({
//     facebook_id : data.facebook_id,
//     addres : data.addres,
//     gender : data.gender,
//     email  : data.email,
//     dob    : data.dob
//   }).then((result)=>{
//     res.status(200).send(result);
//   })
//   .catch(err => {
//     res.status(501).send(`Something wrong with your Post User : ${err}`);
//   })
// }

let User_findbyidorcreate = function(req,res){
  let data = req.body;
  db.User
  .findOrCreate({where: {id:data.id}, defaults: {
    facebook_id : data.facebook_id,
    address : data.address,
    gender : data.gender,
    email  : data.email,
    dob    : data.dob
  }})
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Post User : ${err}`);
  })
}

let User_get = function(req,res){
  db.User.findAll()
  .then((result)=>{
    res.status(200).send(result)  
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Get User : ${err}`);
  })
}

let User_put = function (req,res) {
  let facebook_id = req.params.facebook_id;
  let data = req.body;
  db.User.update({
    facebook_id : data.facebook_id,
    address : data.address,
    gender : data.gender,
    email : data.email,
    dob : data.dob
  }, {
    where:{id:id}
  })
  .then((result)=>{
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Update User : ${err}`);
  })
}

let User_delete = function(req,res) {
  let facebook_id = req.params.facebook_id;
  let data = req.body;
  db.User.destroy({
    where:{id:id}
  })
  .then((result)=>{
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Update User : ${err}`);
  })
}

let User_getById = function(req,res) {
  let facebook_id = req.params.facebook_id;
  db.User.findOne({
    where : {id:id}
  })
  .then(result=>{
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your get by id User : ${err}`)
  })
}

module.exports = {
  // User_post,
  User_get,
  User_put,
  User_delete,
  User_getById,
  User_findbyidorcreate
};