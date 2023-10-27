import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        topic: {
            include: {
                subject: true;
            };
        };
        exam: {
            include: {
                topic: {
                    include: {
                        grades: {
                            include: {
                                school: true;
                            };
                        };
                        subject: true;
                    };
                };
            };
        };
    };
};
export type Question = Prisma.QuestionGetPayload<typeof populated>;
export {};
