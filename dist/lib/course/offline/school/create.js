"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
const __1 = require("..");
async function create(input) {
    try {
        const { status, data } = await axios_1.default.post(`${__1.server}/api/schools`, input);
        return data;
    }
    catch (err) {
        console.log(err);
        console.log("hello world");
        return "jdaskd";
    }
}
exports.create = create;
