"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMany = void 0;
const axios_1 = __importDefault(require("axios"));
const __1 = require("..");
async function deleteMany(ids) {
    try {
        return await axios_1.default.delete(`${__1.server}/api/calendars/batch`, {
            data: { ids },
        });
    }
    catch (err) {
        const { response } = err;
        const msg = (status) => {
            switch (status) {
                default:
                    return "Có lỗi xảy ra";
            }
        };
        return {
            status: response === null || response === void 0 ? void 0 : response.status,
            err: {
                message: msg(response === null || response === void 0 ? void 0 : response.status),
                detail: response === null || response === void 0 ? void 0 : response.data.message,
            },
        };
    }
}
exports.deleteMany = deleteMany;
