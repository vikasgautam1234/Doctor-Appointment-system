const express = require('express')
const { loginController, registerController, authController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()



//REGISTER|| POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

//Auth || post
router.post('/getUserData', authMiddleware, authController)


module.exports = router