"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const populated = client_1.Prisma.validator()({
    include: {
        grade: {
            include: {
                subjects: true,
            },
        },
        year: true,
        students: true,
    },
});
