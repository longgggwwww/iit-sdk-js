import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.DocumentDefaultArgs>()({
  include: {
    category: true,
    topic: {
      include: {
        grades: {
          include: {
            subjects: true,
          },
        },
        categories: true,
        subject: {
          include: {
            topics: true,
            grades: true,
          },
        },
      },
    },
    bookSeries: true,
  },
});

export type Document = Prisma.DocumentGetPayload<typeof populated>;
