import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Transcript } from "../../../../types";

export async function update(
  id: string,
  data: Prisma.TranscriptUpdateInput
): Promise<Response<Transcript>> {
  try {
    return await axios.patch(`${server}/api/transcripts/${id}`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy chủ đề";
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
