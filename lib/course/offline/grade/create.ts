import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Grade } from "../../../../types";

export async function create(data: Prisma.GradeCreateInput) {
  try {
    const url = `${server}/api/grades`;
    const res = await axios.post<Grade>(url, data);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    let message = "Lỗi không xác định";
    switch (axiosErr.response?.status) {
      case 409:
        message = "Nhãn khối lớp đã tồn tại";
        break;
    }

    return {
      status: axiosErr.response!.status,
      err: {
        message,
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
