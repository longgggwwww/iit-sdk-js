import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response } from "../../../../types";

export async function deleteMany(ids: number[]): Promise<Response<any>> {
  try {
    return await axios.delete(`${server}/api/documents/batch`, {
      data: { ids },
    });
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
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
