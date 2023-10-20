import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.SchoolDefaultArgs>()({
  include: {
    grades: {
      include: {
        classes: true,
      },
    },
  },
});

export type School = Prisma.SchoolGetPayload<typeof populated>;
