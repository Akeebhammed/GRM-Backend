const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  errorId: {
    type: String,
    required: true,
  },
  errorSeverity: {
    type: String,
    required: true,
  },
  errorCategory: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    required: true,
  },
  longMessage: {
    type: String,
    required: true,
  },
  errorTime: {
    type: Boolean,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  expanded: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Alert", alertSchema);
