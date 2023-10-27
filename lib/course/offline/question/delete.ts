import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response, Question } from "../../../../types";

export async function deleteOne(id: number): Promise<Response<Question>> {
  try {
    return await axios.delete(`${server}/api/questions/${id}`);
  } catch (err) {
    const { response } = <AxiosError>err;
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
