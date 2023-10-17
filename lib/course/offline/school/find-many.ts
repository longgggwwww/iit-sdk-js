import { Prisma } from "@prisma/client";
import { server } from "..";
import axios, { AxiosResponse } from "axios";

export function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.SchoolWhereUniqueInput;
  where?: Prisma.SchoolWhereInput;
  orderBy?: Prisma.SchoolOrderByWithRelationInput;
}) {
  const schoolPopulated = Prisma.validator<Prisma.SchoolDefaultArgs>()({
    include: {
      grades: true,
      // grades: {
      //   include: {
      //     classes: true,
      //   },
      // },
    },
  });
  type SchoolData = Prisma.SchoolGetPayload<typeof schoolPopulated>;
  return axios.get<SchoolData[]>(`${server}/api/schools`, { params });
}
