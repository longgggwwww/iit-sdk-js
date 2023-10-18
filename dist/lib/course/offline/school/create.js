"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const __1 = require("..");
async function create(data) {
    var _a, _b;
    const schoolPopulated = client_1.Prisma.validator()({
    // include: {
    //   grades: {
    //     include: {
    //       classes: true,
    //     },
    //   },
    // },
    });
    try {
        const res = await axios_1.default.post(`${__1.server}/api/schools`, data);
        const response = {
            status: res.status,
            data: res.data,
        };
        return response;
    }
    catch (err) {
        let message = "Lỗi không xác định";
        const axiosErr = err;
        switch ((_a = axiosErr.response) === null || _a === void 0 ? void 0 : _a.status) {
            case 409:
                message = "Mã trường học đã tồn tại";
                break;
        }
        const myResponse = {
            status: axiosErr.response.status,
            err: {
                message,
                detail: (_b = axiosErr.response) === null || _b === void 0 ? void 0 : _b.data.message,
            },
        };
        return myResponse;
    }
}
exports.create = create;
