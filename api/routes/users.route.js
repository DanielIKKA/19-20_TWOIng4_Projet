const express = require('express');
const _ = require('lodash');

let router = express.Router;

// GET All users 
router.get("/users", (request, response) => {
    response.status(200).end();
});

// GET user by id
router.get("/user/:id", (request, response) => {
    const { id } = request.params.id;
});