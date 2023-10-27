import { Prisma } from "@prisma/client";
declare const populated: {
    include: {
        questions: true;
        topic: {
            include: {
                grades: true;
                subject: {
                    include: {
                        grades: true;
                    };
                };
            };
        };
    };
};
export type Exam = Prisma.ExamGetPayload<typeof populated>;
export {};
