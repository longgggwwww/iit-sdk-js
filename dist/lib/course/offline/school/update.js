"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const __1 = require("..");
function update(id, data) {
    const schoolPopulated = client_1.Prisma.validator()({
        include: {
            grades: {
                include: {
                    classes: true,
                },
            },
        },
    });
    return axios_1.default.patch(`${__1.server}/api/schools/${id}`, data);
}
exports.update = update;
