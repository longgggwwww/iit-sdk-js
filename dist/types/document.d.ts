import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        topic: {
            include: {
                category: true;
                subject: {
                    include: {
                        grade: true;
                    };
                };
            };
        };
        bookSeries: true;
    };
};
export type Document = Prisma.DocumentGetPayload<typeof populated>;
export {};
