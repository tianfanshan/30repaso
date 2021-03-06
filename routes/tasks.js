const express = require('express')
const router = express.Router()
const TaskController = require('../controller/TaskController')

router.post('/',TaskController.create);
router.get('/',TaskController.getAll);
router.get('/id/:_id',TaskController.getById);
router.put('/markAsCompleted/:_id',TaskController.markAsCompleted);
router.put('/:_id',TaskController.update);
router.delete('/:_id',TaskController.delete);

module.exports = router