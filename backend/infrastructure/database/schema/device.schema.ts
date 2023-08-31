import { Schema, model } from "mongoose";

const DeviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastConnection: {
    type: Date,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

export default model("Device", DeviceSchema);
