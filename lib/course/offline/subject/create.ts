import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Subject } from "../../../../types";

export async function create(
  data: Prisma.SubjectCreateInput
): Promise<Response<Subject>> {
  try {
    return await axios.post(`${server}/api/subjects`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Khối lớp không hợp lệ";
        default:
          return "Có lỗi xảy ra";
      }
    };
    return {
      status: response!.status,
      err: {
        message: msg(response?.status),
        detail: response?.data.message,
      },
    };
  }
}
