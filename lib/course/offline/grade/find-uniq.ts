import axios, { AxiosError } from "axios";
import { server } from "..";
import { Grade, Response } from "../../../../types";

export async function findUniq(id: number): Promise<Response<Grade>> {
  try {
    return await axios.get(`${server}/api/grades/${id}`);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy khối lớp";
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
