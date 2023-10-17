"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const prisma_1 = require("../prisma");
function createUser(userData) {
    return prisma_1.prisma.user.create({
        data: userData,
    });
}
exports.createUser = createUser;
