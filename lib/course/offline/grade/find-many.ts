import axios, { AxiosError } from "axios";
import { Grade, Prisma } from "@prisma/client";
import { server } from "..";
import { Response } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.GradeWhereUniqueInput;
  where?: Prisma.GradeWhereInput;
  orderBy?: Prisma.GradeOrderByWithRelationInput;
}): Promise<Response<Grade[]>> {
  try {
    return await axios.get(`${server}/api/grades`, { params });
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        default:
          return "Có lỗi xảy ra";
      }
    };
    return {
      status: response?.status,
      err: {
        message: msg(response?.status),
        detail: response?.data.message,
      },
    };
  }
}
