import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, School } from "../../../../types";

export async function update(
  id: string,
  data: Prisma.SchoolUpdateInput
): Promise<Response<School>> {
  try {
    return await axios.patch(`${server}/api/schools/${id}`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy trường học";
        case 409:
          return "Mã trường học bị trùng";
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
