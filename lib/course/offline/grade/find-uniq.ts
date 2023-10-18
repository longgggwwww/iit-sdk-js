import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function findUniq(id: number) {
  const populated = Prisma.validator<Prisma.GradeDefaultArgs>()({
    include: {
      school: true,
      subjects: true,
      classes: true,
    },
  });
  type Data = Prisma.GradeGetPayload<typeof populated>;

  try {
    const res = await axios.get<Data>(`${server}/api/grades/${id}`);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    let message: string = "Lỗi không xác định";
    const axiosErr = err as AxiosError;
    switch (axiosErr.response?.status) {
      case 404:
        message = "Không tìm thấy khối lớp";
        break;
    }
    return {
      status: axiosErr.response?.status,
      err: {
        message,
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
