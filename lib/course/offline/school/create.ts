import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

type MyResponse<T> = {
  status: number;
  data?: T;
  err?: {
    message: string;
    detail?: string;
  };
};

export async function create(data: Prisma.SchoolCreateInput) {
  const schoolPopulated = Prisma.validator<Prisma.SchoolDefaultArgs>()({
    include: {
      grades: {
        include: {
          classes: true,
        },
      },
    },
  });
  type SchoolData = Prisma.SchoolGetPayload<typeof schoolPopulated>;

  try {
    const res = await axios.post<SchoolData>(`${server}/api/schools`, data);
    const response: MyResponse<SchoolData> = {
      status: res.status,
      data: res.data,
    };
    return response;
  } catch (err) {
    let message: string = "Lỗi không xác định";
    const axiosErr = err as AxiosError;
    switch (axiosErr.response?.status) {
      case 409:
        message = "Mã trường học đã tồn tại";
        break;
    }

    const myResponse: MyResponse<SchoolData> = {
      status: axiosErr.response!.status,
      err: {
        message,
        detail: axiosErr.response?.data.message,
      },
    };
    return myResponse;
  }
}
