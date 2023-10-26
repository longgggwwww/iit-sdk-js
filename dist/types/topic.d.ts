import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        categories: true;
        grades: {
            include: {
                subjects: true;
            };
        };
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
