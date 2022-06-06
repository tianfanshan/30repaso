const Task = require('../models/Task')

const TaskController = {
    async create(req,res){
        try {
            const task = await Task.create({title:req.body.title,completed:false})
            res.status(201).send({message:'Tu vaina a creado correctamente',task})
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    },
}

module.exports = TaskController