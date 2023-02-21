const { Schema, Types } = require('mongoose');
const reactionSchema = require("./Reaction")

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = thoughtSchema;
