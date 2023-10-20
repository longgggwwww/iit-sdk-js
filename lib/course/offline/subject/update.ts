import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Subject } from "../../../../types";

export async function update(
  id: string,
  data: Prisma.SubjectUpdateInput
): Promise<Response<Subject>> {
  try {
    return await axios.patch(`${server}/api/subjects/${id}`, data);
  } catch (err) {
    const { response } = err as AxiosError;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy môn học";
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
