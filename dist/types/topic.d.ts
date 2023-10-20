import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        category: true;
        subject: true;
        documents: {
            include: {
                bookSeries: true;
            };
        };
    };
};
export type Topic = Prisma.TopicGetPayload<typeof populated>;
export {};
