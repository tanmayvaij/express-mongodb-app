"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
const connectToDatabase = () => {
    (0, mongoose_1.connect)(process.env.MONGO_URI)
        .then(() => {
        console.log("Connected to database successfully");
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.connectToDatabase = connectToDatabase;
