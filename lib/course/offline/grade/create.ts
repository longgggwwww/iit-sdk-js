import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Grade, Response } from "../../../../types";

export async function create(
  data: Prisma.GradeCreateInput
): Promise<Response<Grade>> {
  try {
    return await axios.post(`${server}/api/grades`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy trường học";
        case 409:
          return "Nhãn khối lớp đã tồn tại";
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
