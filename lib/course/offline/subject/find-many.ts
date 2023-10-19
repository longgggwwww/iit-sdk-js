import axios, { AxiosError } from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";
import { Subject } from "../../../../types";

export async function findMany(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.SubjectWhereUniqueInput;
  where?: Prisma.SubjectWhereInput;
  orderBy?: Prisma.SubjectOrderByWithRelationInput;
}) {
  try {
    const url = `${server}/api/subjects`;
    const response = await axios.get<Subject[]>(url, {
      params,
    });
    return {
      status: response.status,
      data: response.data,
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
