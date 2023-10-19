import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Subject } from "../../../../types";

export async function create(data: Prisma.SubjectCreateInput) {
  try {
    const url = `${server}/api/subjects`;
    const res = await axios.post<Subject>(url, data);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    let message = "Lỗi không xác định";
    switch (axiosErr.response?.status) {
      case 404:
        message = "Khối lớp không hợp lệ";
        break;
    }
    return {
      status: axiosErr.response!.status,
      message,
      err: {
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
