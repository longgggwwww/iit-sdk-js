import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        class: {
            include: {
                grade: {
                    include: {
                        school: true;
                        subjects: {
                            include: {
                                topics: true;
                            };
                        };
                    };
                };
                year: {
                    include: {};
                };
            };
        };
        transcripts: true;
    };
};
export type Student = Prisma.StudentGetPayload<typeof populated>;
export {};
