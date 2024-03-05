import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.CalendarDefaultArgs>()({
  include: {
    class: true,
    subject: true,
  },
});

export type Calendar = Prisma.CalendarGetPayload<typeof populated>;
