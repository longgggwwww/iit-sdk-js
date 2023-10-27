import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response, Question } from "../../../../types";

export async function findUniq(id: number): Promise<Response<Question>> {
  try {
    return await axios.get(`${server}/api/questions/${id}`);
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
