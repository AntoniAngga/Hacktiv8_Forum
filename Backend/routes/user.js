const express = require('express');
const router = express.Router();
const cUser = require('../controller/cUser');

/* GET users listing. */
router.get('/', cUser.User_get)
router.post('/', cUser.User_findbyidorcreate)
router.put('/:id', cUser.User_put)
router.delete('/:id', cUser.User_delete)
router.get('/:id', cUser.User_getById)

module.exports = router;