const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },

    date: {
      type: String,
      // 16-10-2009
      match: dateRegexp,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// bookSchema.post("save", handleMongooseError);
const Contact = model("contact", bookSchema);

module.exports = {
  Contact,
};
