import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.BookSeriesDefaultArgs>()({
  include: {
    documents: {
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
      },
    },
  },
});

export type BookSeries = Prisma.BookSeriesGetPayload<typeof populated>;