import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.YearDefaultArgs>()({
  include: {
    classes: {
      include: {
        grade: {
          include: {
            school: true,
          },
        },
        students: true,
      },
    },
  },
});

export type Year = Prisma.YearGetPayload<typeof populated>;
