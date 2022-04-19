const express = require('express')
const friendsRouter = express.Router()
const friendsController = require('../controllers/friends.controller')

friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriend)
friendsRouter.post('/', friendsController.postFriends)

module.exports = friendsRouter;