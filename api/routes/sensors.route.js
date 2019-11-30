const express = require('express');
const _ = require('lodash');
const SensorController = require("../models/controllers/sensors.controller");

let router = express.Router();

// GET All sensor 
router.get("/sensors", SensorController.findAll);

// GET sensor by id
router.get("/sensors/:sensorId", SensorController.findOne);

module.exports = router;