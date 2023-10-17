import axios from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export function deleteOne(id: number) {
  const schoolPopulated = Prisma.validator<Prisma.SchoolDefaultArgs>()({
    include: {
      grades: {
        include: {
          classes: true,
        },
      },
    },
  });
  type SchoolData = Prisma.SchoolGetPayload<typeof schoolPopulated>;
  return axios.delete<SchoolData>(`${server}/api/schools/${id}`);
}
