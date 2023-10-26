import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        category: true;
        subject: {
            include: {
                grades: true;
            };
        };
        documents: {
            include: {
                bookSeries: true;
            };
        };
    };
};
export type Topic = Prisma.TopicGetPayload<typeof populated>;
export {};
