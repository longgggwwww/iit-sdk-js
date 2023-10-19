"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMany = void 0;
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const __1 = require("..");
async function findMany(params) {
    var _a, _b;
    const populated = client_1.Prisma.validator()({
        include: {
            school: true,
            subjects: true,
            classes: true,
        },
    });
    try {
        const res = await axios_1.default.get(`${__1.server}/api/grades`, { params });
        return {
            status: res.status,
            data: res.data,
        };
    }
    catch (err) {
        const axiosErr = err;
        return {
            status: (_a = axiosErr.response) === null || _a === void 0 ? void 0 : _a.status,
            err: {
                message: "Lỗi không xác định",
                detail: (_b = axiosErr.response) === null || _b === void 0 ? void 0 : _b.data.message,
            },
        };
    }
}
exports.findMany = findMany;
