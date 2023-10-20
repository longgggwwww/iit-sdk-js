import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Topic } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.TopicWhereUniqueInput;
  where?: Prisma.TopicWhereInput;
  orderBy?: Prisma.TopicOrderByWithRelationInput;
}): Promise<Response<Topic[]>> {
  try {
    return await axios.get(`${server}/api/topics`, { params });
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
