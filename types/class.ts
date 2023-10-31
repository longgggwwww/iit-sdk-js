import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.ClassDefaultArgs>()({
  include: {
    grade: {
      include: {
        subjects: true,
      },
    },
    year: true,
    students: {
      include: {
        class: {
          include: {
            grade: true,
          },
        },
      },
    },
  },
});

export type Class = Prisma.ClassGetPayload<typeof populated>;
