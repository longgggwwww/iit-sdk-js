"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const schoolPopulated = client_1.Prisma.validator()({
    include: {
        grades: {
            include: {
                classes: true,
            },
        },
    },
});