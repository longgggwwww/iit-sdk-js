import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, BookSeries } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.BookSeriesWhereUniqueInput;
  where?: Prisma.BookSeriesWhereInput;
  orderBy?: Prisma.BookSeriesOrderByWithRelationInput;
}): Promise<Response<BookSeries[]>> {
  try {
    return await axios.get(`${server}/api/bookseries`, { params });
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
