import axios, { AxiosError } from "axios";
import { server } from "..";
import { Subject } from "../../../../types";

export async function findUniq(id: number) {
  try {
    const url = `${server}/api/subjects/${id}`;
    const res = await axios.get<Subject>(url);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    let message = "Lỗi không xác định";
    switch (axiosErr.response?.status) {
      case 404:
        message = "Không tìm thấy môn học";
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
