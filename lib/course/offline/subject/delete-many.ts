import axios, { AxiosError } from "axios";
import { server } from "..";

export async function deleteMany(ids: number[]) {
  try {
    const url = `${server}/api/subjects/batch`;
    const res = await axios.delete(url, {
      data: { ids },
    });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    return {
      status: axiosErr.response?.status,
      err: {
        message: "Lỗi không xác định",
        detail: axiosErr.response?.data.message,
      },
    };
  }
}