"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const populated = client_1.Prisma.validator()({
    include: {
        documents: {
            include: {
                topic: {
                    include: {
                        category: true,
                        subject: {
                            include: {
                                grade: true,
                            },
                        },
                    },
                },
            },
        },
    },
});
