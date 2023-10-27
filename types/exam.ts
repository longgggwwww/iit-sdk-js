import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.ExamDefaultArgs>()({
  include: {
    questions: true,
    topic: {
      include: {
        grades: true,
        subject: {
          include: {
            grades: true,
          },
        },
      },
    },
  },
});

export type Exam = Prisma.ExamGetPayload<typeof populated>;
