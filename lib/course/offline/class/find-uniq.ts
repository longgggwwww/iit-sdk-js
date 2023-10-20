import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response, Class } from "../../../../types";

export async function findUniq(id: number): Promise<Response<Class>> {
  try {
    return await axios.get(`${server}/api/classes/${id}`);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy lớp học";
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
