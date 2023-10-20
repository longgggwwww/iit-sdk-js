import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        grades: {
            include: {
                classes: true;
            };
        };
    };
};
export type School = Prisma.SchoolGetPayload<typeof populated>;
export {};
