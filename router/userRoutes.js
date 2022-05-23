var express = require('express');
var router  = express.Router();
const controllerGET = require("../controllers/users/controllerGET");
const controllerPOST = require("../controllers/users/controllerPOST");
const controllerPUT = require("../controllers/users/controllerPUT");
const controllerDELETE = require("../controllers/users/controllerDELETE");


router.get('/', controllerGET.getAllUsers);
router.get('/:id', controllerGET.getUserByID);

router.post('/register', controllerPOST.postUser);
router.post('/login', controllerPOST.loginUser);

router.put('/:id', controllerPUT.updateUser);

router.delete('/', controllerDELETE.deleteAllUsers);
router.delete('/:id', controllerDELETE.deletUserByID);



module.exports = router;