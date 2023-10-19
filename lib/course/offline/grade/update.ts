import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Grade, Response } from "../../../../types";

export async function update(
  id: string,
  data: Prisma.GradeUpdateInput
): Promise<Response<Grade>> {
  try {
    return await axios.patch(`${server}/api/grades/${id}`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy khối lớp";
        case 409:
          return "Nhãn khối lớp bị trùng";
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
