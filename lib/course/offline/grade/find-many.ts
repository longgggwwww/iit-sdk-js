import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.GradeWhereUniqueInput;
  where?: Prisma.GradeWhereInput;
  orderBy?: Prisma.GradeOrderByWithRelationInput;
}) {
  const populated = Prisma.validator<Prisma.GradeDefaultArgs>()({
    include: {
      school: true,
      subjects: true,
      classes: true,
    },
  });
  type Data = Prisma.GradeGetPayload<typeof populated>;

  try {
    const res = await axios.get<Data>(`${server}/api/grades`, { params });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    return {
      status: axiosErr.response?.status,
      err: {
        message: "Lỗi không xác định",
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
