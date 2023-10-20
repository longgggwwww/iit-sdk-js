import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.CategoryDefaultArgs>()({
  include: {
    topics: true,
  },
});

export type Category = Prisma.CategoryGetPayload<typeof populated>;
