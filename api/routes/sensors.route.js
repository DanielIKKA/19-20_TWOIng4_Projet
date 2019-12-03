const express = require('express');
const _ = require('lodash');
const SensorController = require("../models/controllers/sensors.controller");

let router = express.Router();

// GET All sensor 
router.get("/sensors", SensorController.findAll);

// GET sensor by id
router.get("/sensors/:sensorId", SensorController.findOne);

//Get sensor by User ID A FAIRE
//router.get("/sensors/users/:userId",SensorController.findByUserID);

// POST user by id
router.post("/sensors/:sensorId", SensorController.update);

// DELETE user by id
router.delete("/sensors/:sensorId", SensorController.delete);

// PUT one sensor
router.put('/sensors', SensorController.create);

module.exports = router;