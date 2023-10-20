import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, Class } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.ClassWhereUniqueInput;
  where?: Prisma.ClassWhereInput;
  orderBy?: Prisma.ClassOrderByWithRelationInput;
}): Promise<Response<Class[]>> {
  try {
    return await axios.get(`${server}/api/classes`, { params });
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
