const Sensor = require("../schemas/sensorSchema");

// Retrieve and return all sensor from the database.
exports.findAll = (req, res) => {
    Sensor.find()
      .then(sensors => {
        res.status(200).send(sensors);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving sensors.'
        });
      });
  };
  
  // Find a single sensor with a id
  exports.findOne = (req, res) => {
    Sensor.findById(req.params.sensorId)
      .then(sensor => {
        if (!sensor) {
          return res.status(404).send({
            message: 'sensor not found with id ' + req.params.sensorId
          });
        }
        res.send(sensor);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'sensor not found with id ' + req.params.sensorId
          });
        }
        return res.status(500).send({
          message: 'Error retrieving sensor with id ' + req.params.sensorId
        });
      });
  };

  // Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.query.location) {
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }

  // Find user and update it with the request body
  Sensor.findByIdAndUpdate(
    req.params.sensorId,
    {
      location : req.query.location,
    },
    { new: true }
  )
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error updating sensor with id ' + req.params.sensorId
      });
    });
};

// Delete a sensor with the specified sensorId in the request
exports.delete = (req, res) => {
  Sensor.findByIdAndRemove(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      res.send({ message: 'Sensor deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Could not delete sensor with id ' + req.params.sensorId
      });
    });
};

// Create and Save a new Sensor
exports.create = (req, res) => {
  // Validate request
  if (!req.query.location) {
    // If location is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }

  // Create a new Sensor
  const sensor = new Sensor({
    location : req.query.location,
    userID : req.query.userID
    //creationDate : Date.now
  });

  // Save Sensor in the database
  sensor
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly sensor integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new sensor in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Sensor.'
      });
    });
};