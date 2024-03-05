import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        class: true;
        subject: true;
    };
};
export type Calendar = Prisma.CalendarGetPayload<typeof populated>;
export {};
