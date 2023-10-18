import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.SchoolWhereUniqueInput;
  where?: Prisma.SchoolWhereInput;
  orderBy?: Prisma.SchoolOrderByWithRelationInput;
}) {
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
    const res = await axios.get<Data>(`${server}/api/schools`, { params });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const axiosErr = err as AxiosError;
    return {
      status: axiosErr.response?.status,
      err: {
        message: "Lỗi không xác định",
        detail: axiosErr.response?.data.message,
      },
    };
  }
}
