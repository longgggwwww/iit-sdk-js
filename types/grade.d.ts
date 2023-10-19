import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.GradeDefaultArgs>()({
  include: {
    school: true,
    subjects: true,
    classes: true,
  },
});

export type Grade = Prisma.GradeGetPayload<typeof populated>;
