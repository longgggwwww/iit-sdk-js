import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Exam } from "../../../../types";

export async function create(
  data: Prisma.ExamCreateInput
): Promise<Response<Exam>> {
  try {
    return await axios.post(`${server}/api/exams`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Bài thi không hợp lệ";
        default:
          return "Có lỗi xảy ra";
      }
    };
    return {
      status: response!.status,
      err: {
        message: msg(response?.status),
        detail: response?.data.message,
      },
    };
  }
}
