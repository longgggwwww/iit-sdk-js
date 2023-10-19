"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniq = void 0;
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const __1 = require("..");
async function findUniq(id) {
    var _a, _b, _c;
    const populated = client_1.Prisma.validator()({
        include: {
            grades: {
                include: {
                    classes: true,
                },
            },
        },
    });
    try {
        const res = await axios_1.default.get(`${__1.server}/api/schools/${id}`);
        return {
            status: res.status,
            data: res.data,
        };
    }
    catch (err) {
        let message = "Lỗi không xác định";
        const axiosErr = err;
        switch ((_a = axiosErr.response) === null || _a === void 0 ? void 0 : _a.status) {
            case 404:
                message = "Không tìm thấy trường học";
                break;
        }
        return {
            status: (_b = axiosErr.response) === null || _b === void 0 ? void 0 : _b.status,
            err: {
                message,
                detail: (_c = axiosErr.response) === null || _c === void 0 ? void 0 : _c.data.message,
            },
        };
    }
}
exports.findUniq = findUniq;
