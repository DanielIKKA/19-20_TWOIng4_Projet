const User = require("../schemas/user.schema");

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
      .then(users => {
        res.status(200).send(users);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  };
  
  // Find a single User with a id
  exports.findOne = (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found with id ' + req.params.userId
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'User not found with id ' + req.params.userId
          });
        }
        return res.status(500).send({
          message: 'Error retrieving user with id ' + req.params.userId
        });
      });
  };

  // Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  //if (!req.body.location || !req.body.personsInHouse || !req.body.houseSize) {
    console.log(req.query);
    //console.log(res.body);
  if (!req.query.personsInHouse) {
    return res.status(400).send({
      message: 'location and personsInHouse and houseSize can not be empty'
    });
  }

  // Find user and update it with the request body
  User.findByIdAndUpdate(
    req.params.userId,
    {
      location : req.query.location,
      personsInHouse : req.query.personsInHouse,
      houseSize : req.query.houseSize
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + req.params.userId
      });
    });
};