import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function findUniq(id: number) {
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
    const res = await axios.get<Data>(`${server}/api/schools/${id}`);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    let message: string = "Lỗi không xác định";
    const axiosErr = err as AxiosError;
    switch (axiosErr.response?.status) {
      case 404:
        message = "Không tìm thấy trường học";
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
