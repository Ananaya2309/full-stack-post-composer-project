const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    media: {
      type: String,
      default: "",
    },

    platforms: [
      {
        type: String,
      },
    ],

    status: {
  type: String,
  enum: ["Draft", "Published", "Scheduled"],
  default: "Draft",
},

    scheduleDate: {
  type: String,
  default: "",
},

scheduleTime: {
  type: String,
  default: "",
},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);