import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Grade } from "../../../../types";

export async function update(id: string, data: Prisma.GradeUpdateInput) {
  try {
    const url = `${server}/api/grades/${id}`;
    const res = await axios.patch<Grade>(url, data);
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
      case 409:
        message = "Nhãn khối lớp bị trùng";
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
