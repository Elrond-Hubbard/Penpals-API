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
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Update one user by id
router.put("/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Add one friend by id
router.post("/:userId/friends/:friendId", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.params.friendId } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
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
