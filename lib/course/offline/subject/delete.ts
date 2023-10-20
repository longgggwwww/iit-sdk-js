import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response, Subject } from "../../../../types";

export async function deleteOne(id: number): Promise<Response<Subject>> {
  try {
    return await axios.delete(`${server}/api/subjects/${id}`);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy môn học";
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
