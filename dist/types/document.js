"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const populated = client_1.Prisma.validator()({
    include: {
        topic: {
            include: {
                grades: {
                    include: {
                        subjects: true,
                    },
                },
                categories: true,
                subject: {
                    include: {
                        grades: true,
                    },
                },
            },
        },
        bookSeries: true,
    },
});
