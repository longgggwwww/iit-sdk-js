import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.TopicDefaultArgs>()({
  include: {
    categories: true,
    grades: {
      include: {
        subjects: true,
      },
    },
    subject: {
      include: {
        grades: true,
      },
    },
    documents: {
      include: {
        bookSeries: true,
      },
    },
  },
});

export type Topic = Prisma.TopicGetPayload<typeof populated>;
