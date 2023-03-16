const { maxLength } = require("buffer");
const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("Thought", thoughtsSchema);

module.exports = Thoughts;
