import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, School } from "../../../../types";

export async function create(
  data: Prisma.SchoolCreateInput
): Promise<Response<School>> {
  try {
    return await axios.post(`${server}/api/schools`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 409:
          return "Mã trường học đã tồn tại";
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
