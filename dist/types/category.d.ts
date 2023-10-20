import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        topics: true;
    };
};
export type Category = Prisma.CategoryGetPayload<typeof populated>;
export {};
