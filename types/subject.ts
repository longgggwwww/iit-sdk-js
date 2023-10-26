import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.SubjectDefaultArgs>()({
  include: {
    grades: true,
    topics: {
      include: {
        categories: true,
      },
    },
  },
});

export type Subject = Prisma.SubjectGetPayload<typeof populated>;
