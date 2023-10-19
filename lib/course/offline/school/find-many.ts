import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Response, School } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.SchoolWhereUniqueInput;
  where?: Prisma.SchoolWhereInput;
  orderBy?: Prisma.SchoolOrderByWithRelationInput;
}) {
  try {
    const url = `${server}/api/schools`;
    const res = await axios.get<School[]>(url, { params });
    return {
      status: res.status,
      data: res.data,
    } as Response<School[]>;
  } catch (err) {
    const axiosErr = err as AxiosError;
    return {
      status: axiosErr.response?.status,
      err: {
        message: "Lỗi không xác định",
        detail: axiosErr.response?.data.message,
      },
    } as Response<School[]>;
  }
}
