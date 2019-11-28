const express = require('express');
const _ = require('lodash');
//const UserController = require("../models/controllers/users.controller");

let router = express.Router();

/*
// GET All users 
router.get("/users", (request, response) => {
    UserController.findAll(request, response);
    response.status(200).end();

});

// GET user by id
router.get("/user/:id", (request, response) => {
    const { id } = request.params.id;
});*/

module.exports = router;