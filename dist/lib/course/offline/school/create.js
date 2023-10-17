"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const __1 = require("..");
function create(data) {
    const schoolPopulated = client_1.Prisma.validator()({
        include: {
            grades: {
                include: {
                    classes: true,
                },
            },
        },
    });
    return axios_1.default.post(`${__1.server}/api/schools`, data);
}
exports.create = create;
