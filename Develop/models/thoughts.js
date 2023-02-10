const { maxLength } = require("buffer");
const { Schema, Types, model } = require("mongoose");

const thoughtsSchema = new Schema({
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
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

thoughtsSchema
  .virtual("reactionCount")
  .get(function () {
    return `${this.reactions}`;
  })
  .set(function (v) {
    const first = v.split(" ")[0];
    const last = v.split(" ")[1];
    this.set({ first, last });
  });

const Thoughts = model("Thought", thoughtsSchema);

module.exports = Thoughts;
