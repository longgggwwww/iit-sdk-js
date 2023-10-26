import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
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
