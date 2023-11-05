const router = require("express").Router();
const Thought = require("../../models/Thought");
const User = require("../../models/User");

// Find all thoughts
router.get("/", (req, res) => {
  Thought.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Find one thought by id
router.get("/:id", (req, res) => {
  Thought.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Create one new thought and push to associated user
router.post("/", (req, res) => {
  Thought.create(req.body)
    .then((data) => {
      User.findOneAndUpdate(
        { username: data.username },
        { $addToSet: { thoughts: data._id } },
        { new: true }
      ).then((data) => res.json(data));
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Update one thought by id
router.put("/:id", (req, res) => {
  Thought.findOneAndUpdate(
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

// Add one reaction
router.post("/:thoughtId/reactions", (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete one reaction
router.delete("/:thoughtId/reactions/:reactionId", (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: req.params.reactionId } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete one thought by id
router.delete("/:id", (req, res) => {
  Thought.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
