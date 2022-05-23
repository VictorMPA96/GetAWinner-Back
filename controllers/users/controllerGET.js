const Users = require("../../models/usersSchema")

exports.getAllUsers = async (req, res) => {
    const response = await Users.find({}).exec();
    return res.status(200).send(response);
}

exports.getUserByID = async (req, res) => {
    const response = await Users.findById(req.params.id).exec();
    return res.status(200).send(response);
}