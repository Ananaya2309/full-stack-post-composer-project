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
      default: "Draft",
    },

    scheduleDate: {
      type: String,
    },

    scheduleTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);