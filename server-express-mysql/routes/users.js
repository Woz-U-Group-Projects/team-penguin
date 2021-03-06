var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  models.User.findAll({include: [{ model: models.transaction }]}).then(users => res.json(users));
});

router.get("/:id", function (req, res, next) {
  models.User.findByPk(req.params.id).then(user => res.json(user));
});

router.post("/", function (req, res, next) {
  let newUser = new models.User();
  newUser.userid = req.body.userid;
  newUser.firstname = req.body.firstname;
  newUser.lastname = req.body.lastname;
  newUser.username = req.body.username;
  newUser.save().then(user => res.json(user));
});

router.put("/:id", function (req, res, next) {
  models.User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
    },
    {
      where: { userid: parseInt(req.params.id) }
    }
  ).then(user => res.json(user));
});

router.delete("/:id", function (req, res, next) {
  let userId = parseInt(req.params.id);
  models.User.findByPk(userId)
    .then(user => user.destroy())
    .then(() => res.send({ userId }))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
