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
                                grade: true;
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
