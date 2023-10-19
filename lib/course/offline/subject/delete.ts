import axios, { AxiosError } from "axios";
import { server } from "..";
import { Subject } from "../../../../types";

export async function deleteOne(id: number) {
  try {
    const url = `${server}/api/subjects/${id}`;
    const res = await axios.delete<Subject>(url);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    let message: string = "Lỗi không xác định";
    const axiosErr = err as AxiosError;
    switch (axiosErr.response?.status) {
      case 404:
        message = "Không tìm thấy khối lớp";
        break;
    }
    return {
      status: axiosErr.response?.status,
      err: {
        message,
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
