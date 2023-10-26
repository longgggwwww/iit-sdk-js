import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        classes: {
            include: {
                grade: {
                    include: {
                        school: true;
                    };
                };
                students: true;
            };
        };
    };
};
export type Year = Prisma.YearGetPayload<typeof populated>;
export {};
