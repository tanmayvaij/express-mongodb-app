"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const path_1 = __importDefault(require("path"));
const User_model_1 = require("./models/User.model");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", async (_, res) => {
    const users = await User_model_1.User.find({}, {}, {});
    res.render("home", { users });
});
app.post("/", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email)
        return res.render("/");
    await User_model_1.User.create({
        firstName,
        lastName,
        email,
    });
    res.redirect("/");
});
app.listen(5000, async () => {
    (0, database_1.connectToDatabase)();
    console.log("Server started successfully");
});
