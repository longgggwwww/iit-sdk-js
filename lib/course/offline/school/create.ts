import axios from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export function create(data: Prisma.SchoolCreateInput) {
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
  return axios.post<SchoolData>(`${server}/api/schools`, data);
}
