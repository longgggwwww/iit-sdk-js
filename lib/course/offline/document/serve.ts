import axios, { AxiosError } from "axios";
import { server } from "..";

export async function serv(file: string) {
  try {
    return await axios.post(`${server}/uploads/${file}`);
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
