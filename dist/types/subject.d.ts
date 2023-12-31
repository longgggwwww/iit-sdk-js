import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        grades: true;
        topics: {
            include: {
                categories: true;
            };
        };
    };
};
export type Subject = Prisma.SubjectGetPayload<typeof populated>;
export {};
