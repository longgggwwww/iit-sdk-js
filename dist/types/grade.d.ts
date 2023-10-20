import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        school: true;
        subjects: true;
        classes: true;
    };
};
export type Grade = Prisma.GradeGetPayload<typeof populated>;
export {};
