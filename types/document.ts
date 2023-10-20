import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.DocumentDefaultArgs>()({
  include: {
    topic: {
      include: {
        category: true,
        subject: {
          include: {
            grade: true,
          },
        },
      },
    },
    bookSeries: true,
  },
});

export type Document = Prisma.DocumentGetPayload<typeof populated>;
