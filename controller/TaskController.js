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
    async getAll(req,res){
        try {
            const tasks = await Task.find()
            res.send(tasks)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async getById(req,res){
        try {
            const task = await Task.findById(req.params._id)
            res.send(task)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async markAsCompleted(req,res){
        try {
            const taskCompleted = await Task.findByIdAndUpdate(
                req.params._id,
                {completed:true},
                {new:true}
                )
            res.send({message:"Tu vaina ha sido completada",taskCompleted})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async update(req,res){
        try {
            const task = await Task.findByIdAndUpdate(
                req.params._id,
                {title:req.body.title},
                {new:true}
                )
            res.send({message:"Ha mutado tu vaina loca mutante",task})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async delete(req,res){
        try {
            const taskdelete = await Task.findByIdAndDelete(req.params._id)
            res.send('Tu vaina ha explotado locamente',taskdelete)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = TaskController