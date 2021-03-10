const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId

const User = new Schema({
    id: ObjectId,
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

module.exports = model('User', User)