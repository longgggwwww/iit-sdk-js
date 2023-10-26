import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        class: {
            include: {
                year: true;
            };
        };
        transcripts: true;
    };
};
export type Student = Prisma.StudentGetPayload<typeof populated>;
export {};
