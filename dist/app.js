"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const User_model_1 = require("./models/User.model");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/", async (req, res) => {
    try {
        const user = await User_model_1.User.findOne({ firstName: "Tanmay" });
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.json({
            err: "Error occurred",
        });
    }
});
app.listen(5000, async () => {
    (0, database_1.connectToDatabase)();
    await User_model_1.User.create({
        firstName: "Tanmay",
        lastName: "Vaij",
        email: "tanmayvaij22@gmail.com",
    });
    console.log("Server started successfully");
});
