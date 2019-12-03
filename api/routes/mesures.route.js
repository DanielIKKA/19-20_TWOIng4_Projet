const express = require('express');
const _ = require('lodash');
const MeasureController = require("../models/controllers/measure.controller");

let router = express.Router();

// GET All measures 
router.get("/measures", MeasureController.findAll);

// GET measure by id
router.get("/measures/:measureId", MeasureController.findOne);

//Get sensor by Sensor ID A FAIRE
//router.get("/sensors/users/:userId",SensorController.findByUserID);

// POST user by id
router.post("/measures/:measureId", MeasureController.update)

// DELETE user by id
router.delete("/measures/:measureId", MeasureController.delete);

module.exports = router;