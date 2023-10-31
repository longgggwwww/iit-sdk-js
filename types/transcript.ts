import { Prisma } from "@prisma/client";

const populated = Prisma.validator<Prisma.TranscriptDefaultArgs>()({
  include: {
    class: {
      include: {
        grade: true,
        year: true,
      },
    },
    subject: true,
    student: true,
  },
});

export type Transcript = Prisma.TranscriptGetPayload<typeof populated>;
