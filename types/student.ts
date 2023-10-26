import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.StudentDefaultArgs>()({
  include: {
    class: {
      include: {
        year: true,
      },
    },
    transcripts: true,
  },
});

export type Student = Prisma.StudentGetPayload<typeof populated>;
