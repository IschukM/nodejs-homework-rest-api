const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name for contact"],
    },
    email: {
      type: String,
      required: [true, "missing required fields"],
    },
    phone: {
      type: String,
      required: [true, "missing required fields"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .required()
    .messages({ "any.required": "missing required fields" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required fields" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required fields" }),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);
contactSchema.post("save", handleMongooseError);

module.exports = { Contact, schemas };
