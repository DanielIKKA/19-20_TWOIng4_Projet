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

