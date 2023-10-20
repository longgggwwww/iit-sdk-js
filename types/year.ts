import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.YearDefaultArgs>()({
  include: {
    classes: true,
  },
});

export type Year = Prisma.YearGetPayload<typeof populated>;
