import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Question } from "../../../../types";

export async function create(
  data: Prisma.QuestionCreateInput
): Promise<Response<Question>> {
  try {
    return await axios.post(`${server}/api/questions`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Câu hỏi không hợp lệ";
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
