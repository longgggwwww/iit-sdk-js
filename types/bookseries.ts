import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.BookSeriesDefaultArgs>()({
  include: {
    documents: {
      include: {
        topic: {
          include: {
            categories: true,
            subject: {
              include: {
                grades: true,
              },
            },
          },
        },
      },
    },
  },
});

export type BookSeries = Prisma.BookSeriesGetPayload<typeof populated>;
