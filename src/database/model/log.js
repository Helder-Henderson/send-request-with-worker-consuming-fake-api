"use strict";
exports.__esModule = true;
var mongoose_1 = require("../mongoose");
var LogSchema = new mongoose_1["default"].Schema({
    log: {
        type: String
    },
    createdAt: {
        type: Number,
        "default": Date.now
    }
});
var LogModel = mongoose_1["default"].model("Log", LogSchema);
exports["default"] = LogModel;
