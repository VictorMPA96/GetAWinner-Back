const Users = require("../../models/usersSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.updateUser = async (req, res) => {

    const getUser = await Users.findById(req.params.id).exec();

    const request = req.body;

    if(request._id || request._id === undefined){
        request._id = getUser._id;
    }

    if(request.username === undefined){
        request.username = getUser.username;
    }

    if(request.password === undefined){
        request.password = getUser.password;
    }else{
        request.password = await bcrypt.hash(req.body.password, saltRounds);
    }

    const updatedUser = await Users.findByIdAndUpdate(req.params.id, request);
    return res.status(200).json({oldUser: updatedUser});
}


