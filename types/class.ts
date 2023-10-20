import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.ClassDefaultArgs>()({
  include: {
    grade: {
      include: {
        subjects: true,
      },
    },
    year: true,
    students: true,
  },
});

export type Class = Prisma.ClassGetPayload<typeof populated>;
