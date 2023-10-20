import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, BookSeries } from "../../../../types";

export async function update(
  id: string,
  data: Prisma.BookSeriesUpdateInput
): Promise<Response<BookSeries>> {
  try {
    return await axios.patch(`${server}/api/bookseries/${id}`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Không tìm thấy loại sách";
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
