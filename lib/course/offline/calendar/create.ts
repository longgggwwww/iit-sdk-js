import { Prisma } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { server } from "..";
import { Calendar, Response } from "../../../../types";

export async function create(
  data: Prisma.CalendarCreateInput
): Promise<Response<Calendar>> {
  try {
    return await axios.post(`${server}/api/calendars`, data);
  } catch (err) {
    const { response } = <AxiosError>err;
    const msg = (status?: number) => {
      switch (status) {
        case 404:
          return "Lịch không hợp lệ";
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
