import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.TopicDefaultArgs>()({
  include: {
    category: true,
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
