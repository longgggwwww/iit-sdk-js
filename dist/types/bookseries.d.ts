import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        documents: {
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
            };
        };
    };
};
export type BookSeries = Prisma.BookSeriesGetPayload<typeof populated>;
export {};
