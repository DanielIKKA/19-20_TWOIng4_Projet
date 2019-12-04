const Measure = require("../schemas/measureSchema");

// Retrieve and return all measure from the database.
exports.findAll = (req, res) => {
    Measure.find()
      .then(measures => {
        res.status(200).send(measures);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving measures.'
        });
      });
  };
  
  // Find a single measure with an id
  exports.findOne = (req, res) => {
    Measure.findById(req.params.measureId)
      .then(measure => {
        if (!measure) {
          return res.status(404).send({
            message: 'measure not found with id ' + req.params.measureId
          });
        }
        res.send(measure);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'measure not found with id ' + req.params.measureId
          });
        }
        return res.status(500).send({
          message: 'Error retrieving measure with id ' + req.params.measureId
        });
      });
  };

  // Update a measure identified by the measureId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.query.value) {
    return res.status(400).send({
      message: 'value can not be empty'
    });
  }

// Find user and update it with the request body
Measure.findByIdAndUpdate(
  req.params.measureId,
  {
    type: req.query.type,
    value: req.query.value,
  },
  { new: true }
)
  .then(measure => {
    if (!measure) {
      return res.status(404).send({
        message: 'measure not found with id ' + req.params.measureId
      });
    }
    res.send(measure);
  })
  .catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'Measure not found with id ' + req.params.measureId
      });
    }
    return res.status(500).send({
      message: 'Error updating measure with id ' + req.params.measureId
    });
});
};

// Delete a measure with the specified measureId in the request
exports.delete = (req, res) => {
  Measure.findByIdAndRemove(req.params.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'measure not found with id ' + req.params.measureId
        });
      }
      res.send({ message: 'measure deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'measure not found with id ' + req.params.measureId
        });
      }
      return res.status(500).send({
        message: 'Could not delete measure with id ' + req.params.measureId
      });
    });
};

// Create and Save a new measure
exports.create = (req, res) => {
  // Validate request
  if (!req.query.value) {
    // If location is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'value can not be empty'
    });
  }

  // Create a new Measure
  const measure = new Measure({
    type : req.query.type,
    value : req.query.value,
    sensorID : req.query.sensorID
    //creationDate : Date.now
  });

  // Save measure in the database
  measure
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly measure integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new sensor in measure we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the measure.'
      });
    });
};