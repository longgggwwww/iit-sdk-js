import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        class: {
            include: {
                grade: true;
                year: true;
            };
        };
        subject: true;
        student: true;
    };
};
export type Transcript = Prisma.TranscriptGetPayload<typeof populated>;
export {};
