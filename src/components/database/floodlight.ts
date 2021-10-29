import mongoose from "mongoose";
require("dotenv").config();

// Mongo Connection

const conn = mongoose.createConnection(process.env.URI ?? "");

const plugSchema = new mongoose.Schema({
  id: { type: String },
  state: { type: String },
});

const FloodlightStore = conn.model("floodlight", plugSchema);

export default FloodlightStore;
