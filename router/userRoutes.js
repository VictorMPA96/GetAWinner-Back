var express = require('express');
var router  = express.Router();
const middlewares = require("../middlewares/validator");
const controllerGET = require("../controllers/users/controllerGET");
const controllerPOST = require("../controllers/users/controllerPOST");
const controllerPUT = require("../controllers/users/controllerPUT");
const controllerDELETE = require("../controllers/users/controllerDELETE");


router.get('/', middlewares.isNotAuthenticated, controllerGET.getAllUsers);
router.get('/:id', middlewares.isNotAuthenticated, controllerGET.getUserByID);

router.post('/', middlewares.usernameIsEmpty, middlewares.passwordIsEmpty, controllerPOST.postUser);
router.post('/register', middlewares.isInvalidRoleParam, middlewares.usernameIsEmpty, middlewares.passwordIsEmpty, controllerPOST.postUser);
router.post('/login', middlewares.usernameIsEmpty, middlewares.passwordIsEmpty, controllerPOST.loginUser);

router.put('/:id', middlewares.isNotAuthenticated, controllerPUT.updateUser);

router.delete('/', middlewares.isNotAuthenticated, controllerDELETE.deleteAllUsers);
router.delete('/:id', middlewares.isNotAuthenticated, controllerDELETE.deletUserByID);


module.exports = router;