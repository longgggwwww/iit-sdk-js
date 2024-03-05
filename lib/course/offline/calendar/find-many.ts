import { Prisma } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { server } from "..";
import { Calendar, Response } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.CalendarWhereUniqueInput;
  where?: Prisma.CalendarWhereInput;
  orderBy?: Prisma.CalendarOrderByWithRelationInput;
}): Promise<Response<Calendar[]>> {
  try {
    return await axios.get(`${server}/api/calendars`, {
      params,
    });
  } catch (err) {
    const { response } = err as AxiosError;
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
