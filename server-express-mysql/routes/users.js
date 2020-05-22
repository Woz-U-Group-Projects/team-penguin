var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');
var op = Sequelize.Op;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Return all app users (findAll)
router.get("/", function (req, res, next) {
  models.users.findAll({})
    .then(users => res.json(users));
});

// Add users to the database
router.post("/", function (req, res, next) {
  let newUser = new models.users();
  newUser.firstname = req.body.firstname;
  newUser.lastname = req.body.lastname;
  newUser.username = req.body.username;
  newUser.save().then(users => res.json(users));
})

router.get("/:id/transactions", function (req, res, next) {
  models.transactions
  .findOne({
    include: [{model: models.transactions}],
    where: { userid: parseInt(req.params.id)}
  })
  .then(usersFound => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(usersFound));
  })
});

module.exports = router;
