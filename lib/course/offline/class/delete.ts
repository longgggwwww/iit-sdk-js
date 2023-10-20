import axios, { AxiosError } from "axios";
import { server } from "..";
import { Class, Response } from "../../../../types";

export async function deleteOne(id: number): Promise<Response<Class>> {
  try {
    return await axios.delete(`${server}/api/classes/${id}`);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy trường";
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
