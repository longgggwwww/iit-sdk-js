import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function create(data: Prisma.SchoolCreateInput) {
  const populated = Prisma.validator<Prisma.SchoolDefaultArgs>()({
    include: {
      grades: {
        include: {
          classes: true,
        },
      },
    },
  });
  type Data = Prisma.SchoolGetPayload<typeof populated>;

  try {
    const res = await axios.post<Data>(`${server}/api/schools`, data);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    let message: string = "Lỗi không xác định";
    switch (axiosErr.response?.status) {
      case 409:
        message = "Mã trường học đã tồn tại";
        break;
    }

    return {
      status: axiosErr.response!.status,
      err: {
        message,
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
