"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const populated = client_1.Prisma.validator()({
    include: {
        category: true,
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
                        topics: true,
                        grades: true,
                    },
                },
            },
        },
        bookSeries: true,
    },
});
