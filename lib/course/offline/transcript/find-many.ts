import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Transcript } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.TranscriptWhereUniqueInput;
  where?: Prisma.TranscriptWhereInput;
  orderBy?: Prisma.TranscriptOrderByWithRelationInput;
}): Promise<Response<Transcript[]>> {
  try {
    return await axios.get(`${server}/api/transcripts`, { params });
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
