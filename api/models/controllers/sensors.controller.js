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
