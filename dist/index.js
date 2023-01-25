"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var images_1 = require("./routes/api/images");
var port = 5000;
var app = (0, express_1.default)();
app.use("/api", index_1.default);
app.use("/images", images_1.images);
app.listen(port, function () { return console.log("Listen on port ".concat(port)); });
exports.default = app;
