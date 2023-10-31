import axios, { AxiosError } from "axios";
import { server } from "..";
import { Response } from "../../../../types";

export async function upload(data: FormData): Promise<Response<any>> {
  try {
    console.log("sdk test:", data);
    return await axios.post(`${server}/api/documents/upload`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
