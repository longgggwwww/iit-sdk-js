import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function create(data: Prisma.GradeCreateInput) {
  const populated = Prisma.validator<Prisma.GradeDefaultArgs>()({
    include: {
      school: true,
      subjects: true,
      classes: true,
    },
  });
  type Data = Prisma.GradeGetPayload<typeof populated>;

  try {
    const result = await axios.post<Data>(`${server}/api/grades`, data);
    return {
      status: result.status,
      data: result.data,
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
