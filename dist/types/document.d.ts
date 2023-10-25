import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        topic: {
            include: {
                category: true;
                subject: {
                    include: {
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
