import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Transcript } from "../../../../types";

export async function create(
  data: Prisma.TranscriptCreateInput
): Promise<Response<Transcript>> {
  try {
    return await axios.post(`${server}/api/transcripts`, data);
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
