import axios, { AxiosError } from "axios";
import { server } from "..";
import { Grade } from "../../../../types";

export async function findUniq(id: number) {
  try {
    const url = `${server}/api/grades/${id}`;
    const res = await axios.get<Grade>(url);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    let message = "Lỗi không xác định";
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
