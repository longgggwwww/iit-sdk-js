import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        grade: true;
        topics: {
            include: {
                category: true;
            };
        };
    };
};
export type Subject = Prisma.SubjectGetPayload<typeof populated>;
export {};
