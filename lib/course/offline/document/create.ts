import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Document } from "../../../../types";

export async function create(
  data: Prisma.DocumentCreateInput
): Promise<Response<Document>> {
  try {
    return await axios.post(`${server}/api/documents`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
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
