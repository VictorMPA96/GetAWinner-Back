const Users = require("../models/usersSchema");
const jwt = require('jsonwebtoken');

const isNotAuthenticated = async (req, res, next) => {
    const token = req.get("X-Session-Token")
    
    if(!token){
        return res.status(401).send("'X-Session-Token' HEADER IS EMPTY");
    }

    let decoded;
    try{
        decoded = jwt.verify(token, "secretkey");
    } catch(error){
        return res.status(401).send("INVALID TOKEN");
    }    

    const currentDate = new Date();
    const {idUser, iat} = decoded;
    const expirationDate = new Date(iat * 1000);

    if(currentDate >= expirationDate){
        return res.status(401).send("TOKEN EXPIRED");
    }

    decoded = await Users.findById(idUser);

    req.decoded = decoded;

    return next();
}

const isInvalidRoleParam = (req, res, next) => {
    if(req.body.role){
        return res.status(401).send("FORBIDDEN PARAM");
    }

    return next();
}

const usernameIsEmpty = (req, res, next) => {
    if(!req.body.username){
        return res.status(400).send("USERNAME PARAM IS EMPTY");
    }

    return next();
}

const passwordIsEmpty = (req, res, next) => {
    if(!req.body.password){
        return res.status(400).send("PASSWORD PARAM IS EMPTY");
    }

    return next();
}


exports.isNotAuthenticated = isNotAuthenticated;
exports.usernameIsEmpty = usernameIsEmpty;
exports.passwordIsEmpty = passwordIsEmpty;
exports.isInvalidRoleParam = isInvalidRoleParam;
