const Users = require("../../models/usersSchema");

exports.deletUserByID = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id).exec();
    return res.status(200).send("USER DELETED");
}

exports.deleteAllUsers = async (req, res) => {
    await Users.deleteMany({}).exec();
    return res.status(200).send("ALL USERS DELETED");
}
