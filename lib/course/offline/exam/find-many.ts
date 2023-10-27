import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Exam } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.ExamWhereUniqueInput;
  where?: Prisma.ExamWhereInput;
  orderBy?: Prisma.ExamOrderByWithRelationInput;
}): Promise<Response<Exam[]>> {
  try {
    return await axios.get(`${server}/api/exams`, {
      params,
    });
  } catch (err) {
    const { response } = err as AxiosError;
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
