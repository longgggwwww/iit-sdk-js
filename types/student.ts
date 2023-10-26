import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.StudentDefaultArgs>()({
  include: {
    class: {
      include: {
        grade: {
          include: {
            school: true,
            subjects: {
              include: {
                topics: true,
              },
            },
          },
        },
        year: {
          include: {},
        },
      },
    },
    transcripts: true,
  },
});

export type Student = Prisma.StudentGetPayload<typeof populated>;
