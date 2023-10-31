import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        category: true;
        topic: {
            include: {
                grades: {
                    include: {
                        subjects: true;
                    };
                };
                categories: true;
                subject: {
                    include: {
                        topics: true;
                        grades: true;
                    };
                };
            };
        };
        bookSeries: true;
    };
};
export type Document = Prisma.DocumentGetPayload<typeof populated>;
export {};
