import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Question } from "../../../../types";

export async function update(
  id: string,
  data: Prisma.QuestionUpdateInput
): Promise<Response<Question>> {
  try {
    return await axios.patch(`${server}/api/questions/${id}`, data);
  } catch (err) {
    const { response } = err as AxiosError;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy câu hỏi";
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
