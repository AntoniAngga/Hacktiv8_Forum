const db = require('../models');

let Thread_post = function (req,res) {
  let data = req.body;
  db.Thread.create({
    subject : data.subject,
    desc : data.desc,
    tags : data.tags,
    id_user : data.id_user
    });
  }).then((result)=>{
    res.status(200).send(result);
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Post Thread : ${err}`);
  })
}

let Thread_get = function(req,res){
  db.Thread.findAll()
  .then((result)=>{
    res.status(200).send(result)  
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Get Thread : ${err}`);
  })
}

let Thread_put = function (req,res) {
  let facebook_id = req.params.facebook_id;
  let data = req.body;
  db.Thread.update({
    facebook_id : data.facebook_id,
    address : data.address,
    gender : data.gender,
    email : data.email,
    dob : data.dob
  }, {
    where:{facebook_id:facebook_id}
  })
  .then((result)=>{
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Update Thread : ${err}`);
  })
}

let Thread_delete = function(req,res) {
  let facebook_id = req.params.facebook_id;
  let data = req.body;
  db.Thread.destroy({
    where:{facebook_id:facebook_id}
  })
  .then((result)=>{
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your Update Thread : ${err}`);
  })
}

let Thread_getById = function(req,res) {
  let facebook_id = req.params.facebook_id;
  db.Thread.findOne({
    where : {facebook_id:facebook_id}
  })
  .then(result=>{
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(501).send(`Something wrong with your get by id Thread : ${err}`)
  })
}

module.exports = {
  Thread_post,
  Thread_get,
  Thread_put,
  Thread_delete,
  Thread_getById
};