import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.QuestionDefaultArgs>()({
  include: {
    topic: {
      include: {
        subject: true,
      },
    },
    exam: {
      include: {
        topic: {
          include: {
            grades: {
              include: {
                school: true,
              },
            },
            subject: true,
          },
        },
      },
    },
  },
});

export type Question = Prisma.QuestionGetPayload<typeof populated>;
