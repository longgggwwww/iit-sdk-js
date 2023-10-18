import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function update(id: string, data: Prisma.GradeUpdateInput) {
  const populated = Prisma.validator<Prisma.GradeDefaultArgs>()({
    include: {
      school: true,
      subjects: true,
      classes: true,
    },
  });
  type Data = Prisma.GradeGetPayload<typeof populated>;

  try {
    const res = await axios.patch<Data>(`${server}/api/grades/${id}`, data);
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
      case 409:
        message = "Nhãn khối lớp bị trùng";
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
