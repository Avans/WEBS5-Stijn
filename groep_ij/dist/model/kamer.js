"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app/models/user.js
// load the things we need
const mongoose = require("mongoose");
exports.Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
// define the schema for our user model
var kamerSchema = new exports.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});
exports.KamerModel = mongoose.model('Kamer', kamerSchema);
//# sourceMappingURL=kamer.js.map