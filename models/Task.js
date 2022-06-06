const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
        required:[true,'El titulo de la tarea es obligatorio']},
        completed:Boolean
    },
    {timestamps:true}
)

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task