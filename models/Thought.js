const { Schema, model } = require("mongoose");
//TODO: add associated schemas here

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
