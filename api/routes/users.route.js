const express = require('express');
const _ = require('lodash');
const UserController = require("../models/controllers/users.controller");

let router = express.Router();

// GET All users 
router.get("/users", UserController.findAll);

// GET user by id
router.get("/users/:userId", UserController.findOne);

// POST user by id
router.post("/users/:userId", UserController.update);

// DELETE user by id
router.delete("/users/:userId", UserController.delete);

module.exports = router;