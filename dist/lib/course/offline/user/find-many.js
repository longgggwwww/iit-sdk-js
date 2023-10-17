"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findManyUsers = void 0;
const prisma_1 = require("../prisma");
async function findManyUsers() {
    return await prisma_1.prisma.user.findMany({
        include: {
            posts: true,
        },
    });
}
exports.findManyUsers = findManyUsers;
