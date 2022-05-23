const Users = require("../../models/usersSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.postUser = async (req, res) => {

    const newUser = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, saltRounds),
        createdOn: new Date()
    }

    const user = await Users.create(newUser);
    return res.status(200).json(user);
}

exports.loginUser = async (req, res) => {

    
}
