import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        grades: true;
        topics: {
            include: {
                category: true;
            };
        };
    };
};
export type Subject = Prisma.SubjectGetPayload<typeof populated>;
export {};
