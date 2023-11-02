const router = require("express").Router();
const Thought = require("../../models/Thought");

// Find all thoughts
router.get("/", (req, res) => {
  Thought.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Find one thought by id
router.get("/:id", (req, res) => {
  Thought.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

// Create one new thought and push to associated user
router.post("/", (req, res) => {
  Thought.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
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
      if (err) throw err;
    });
});

// Delete one thought by id
router.delete("/:id", (req, res) => {
  Thought.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
