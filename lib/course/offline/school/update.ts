import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { School } from "../../../../types";

export async function update(id: string, data: Prisma.SchoolUpdateInput) {
  try {
    const url = `${server}/api/schools/${id}`;
    const res = await axios.patch<School>(url, data);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    let message = "Lỗi không xác định";
    switch (axiosErr.response?.status) {
      case 404:
        message = "Không tìm thấy trường học";
        break;
      case 409:
        message = "Mã trường học bị trùng";
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
