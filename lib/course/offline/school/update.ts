import axios from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export function update(id: string, data: Prisma.SchoolUpdateInput) {
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
  return axios.patch<SchoolData>(`${server}/api/schools/${id}`, data);
}
