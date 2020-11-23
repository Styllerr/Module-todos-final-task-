const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId

const Task = new Schema({
    id: ObjectId,
    data: {type: String, required: true},
    serviceType: {type: String, required: true},
    task: {type: String, required: true},
    location: {type: String, required: true},
    description: String,
});

module.exports = model('Tasks', Task)