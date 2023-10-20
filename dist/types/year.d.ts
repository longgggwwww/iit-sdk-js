import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        classes: true;
    };
};
export type Year = Prisma.YearGetPayload<typeof populated>;
export {};
