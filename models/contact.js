const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  contactId: {
    type: String,
    required: true,
  },
  contactStatus: {
    type: String,
    required: true,
  },
  contactName: {
    type: Number,
    required: true,
  },
  contactGround: {
    type: String,
    required: true,
  },
  contactStatellite: {
    type: String,
    required: true,
  },
  contactEquipment: {
    type: String,
    required: true,
  },
  contactState: {
    type: String,
    required: true,
  },
  contactStep: {
    type: String,
    required: true,
  },
  contactDetail: {
    type: String,
    required: true,
  },
  contactBeginTimestamp: {
    type: Number,
    required: true,
  },
  contactEndTimestamp: {
    type: Number,
    required: true,
  },
  contactLatitude: {
    type: Number,
    required: true,
  },
  contactLongitude: {
    type: Number,
    required: true,
  },
  contactAzimuth: {
    type: Number,
    required: true,
  },
  contactElevation: {
    type: Number,
    required: true,
  },
  contactResolution: {
    type: String,
    required: true,
  },
  contactResolutionStatus: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Contact", contactSchema);
