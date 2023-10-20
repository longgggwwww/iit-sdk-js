import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.SubjectDefaultArgs>()({
  include: {
    grade: true,
    topics: {
      include: {
        category: true,
      },
    },
  },
});

export type Subject = Prisma.SubjectGetPayload<typeof populated>;
