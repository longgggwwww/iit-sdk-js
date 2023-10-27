import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response, Exam } from "../../../../types";

export async function deleteOne(id: number): Promise<Response<Exam>> {
  try {
    return await axios.delete(`${server}/api/exams/${id}`);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy bài thi";
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
