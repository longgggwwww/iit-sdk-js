import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Subject } from "../../../../types";

export async function update(id: string, data: Prisma.SubjectUpdateInput) {
  try {
    const url = `${server}/api/subjects/${id}`;
    const res = await axios.patch<Subject>(url, data);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    let message: string = "Lỗi không xác định";
    const axiosErr = err as AxiosError;
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
