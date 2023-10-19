import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Grade, Response } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.GradeWhereUniqueInput;
  where?: Prisma.GradeWhereInput;
  orderBy?: Prisma.GradeOrderByWithRelationInput;
}) {
  try {
    const url = `${server}/api/grades`;
    const res = await axios.get<Grade[]>(url, { params });
    return {
      status: res.status,
      data: res.data,
    } as Response<Grade[]>;
  } catch (err) {
    const axiosErr = err as AxiosError;
    return {
      status: axiosErr.response?.status,
      err: {
        message: "Lỗi không xác định",
        detail: axiosErr.response?.data.message,
      },
    } as Response<Grade[]>;
  }
}
