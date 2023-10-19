"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
const __1 = require("..");
async function create(data) {
    var _a, _b;
    try {
        const url = `${__1.server}/api/subjects`;
        const res = await axios_1.default.post(url, data);
        return {
            status: res.status,
            data: res.data,
        };
    }
    catch (err) {
        const axiosErr = err;
        let message = "Lỗi không xác định";
        switch ((_a = axiosErr.response) === null || _a === void 0 ? void 0 : _a.status) {
            case 404:
                message = "Khối lớp không hợp lệ";
                break;
        }
        return {
            status: axiosErr.response.status,
            message,
            err: {
                detail: (_b = axiosErr.response) === null || _b === void 0 ? void 0 : _b.data.message,
            },
        };
    }
}
exports.create = create;
