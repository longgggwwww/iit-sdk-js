import axios from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export function deleteMany(id: number) {
  const deleteManyArgs = Prisma.validator<Prisma.SchoolDeleteManyArgs>()({});
  type DeleteManyArgs = Prisma.SchoolGetPayload<typeof deleteManyArgs>;
  return axios.get<DeleteManyArgs>(`${server}/api/schools/${id}`);
}
