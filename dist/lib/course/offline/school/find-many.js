"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMany = void 0;
const client_1 = require("@prisma/client");
const __1 = require("..");
const axios_1 = __importDefault(require("axios"));
function findMany(params) {
    const schoolPopulated = client_1.Prisma.validator()({
        include: {
            grades: true,
            // grades: {
            //   include: {
            //     classes: true,
            //   },
            // },
        },
    });
    return axios_1.default.get(`${__1.server}/api/schools`, { params });
}
exports.findMany = findMany;
