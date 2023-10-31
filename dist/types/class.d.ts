import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        grade: {
            include: {
                subjects: true;
            };
        };
        year: true;
        students: {
            include: {
                class: {
                    include: {
                        grade: true;
                    };
                };
            };
        };
    };
};
export type Class = Prisma.ClassGetPayload<typeof populated>;
export {};
