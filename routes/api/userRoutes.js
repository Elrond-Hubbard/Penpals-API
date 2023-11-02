const router = require("express").Router();
const User = require("../../models/User");

// Find all users
router.get("/", (req, res) => {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Find one user by id
router.get("/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Create one new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Update one user by id
router.put("/:id", (req, res) => {
// TODO: findOneAndUpdate
});

// Delete one user by id
router.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
