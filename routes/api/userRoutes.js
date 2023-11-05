const router = require("express").Router();
const User = require("../../models/User");
const Thought = require("../../models/Thought");

// Find all users
router.get("/", (req, res) => {
  User.find({})
    .populate("friends")
    .populate("thoughts")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Find one user by id
router.get("/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Create one new user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
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
      console.log(err);
      res.json(err);
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
      console.log(err);
      res.json(err);
    });
});

// Delete one friend by id
router.delete("/:userId/friends/:friendId", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete one user by id and delete user's thoughts
router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      Thought.deleteMany({ username: data.username }).then((data) =>
        res.json(data)
      );
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
