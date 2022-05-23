const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        username: String,
        password: String,
        createdOn: Date
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Users', usersSchema);