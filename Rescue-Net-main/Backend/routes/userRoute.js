const express = require ('express')
const { registerUser,authUser } = require('../Controllers/userController')
// const { protect } = require('../middleware/authorize')

const router = express.Router()


router.route('/').post(registerUser);
// .get(protect , allData)
router.route('/login').post(authUser)


module.exports = router