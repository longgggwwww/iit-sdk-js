"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const populated = client_1.Prisma.validator()({
    include: {
        class: {
            include: {
                grade: {
                    include: {
                        school: true,
                        subjects: {
                            include: {
                                topics: true,
                            },
                        },
                    },
                },
                year: {
                    include: {},
                },
            },
        },
        transcripts: true,
    },
});
