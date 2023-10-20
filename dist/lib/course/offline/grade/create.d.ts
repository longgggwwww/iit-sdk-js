import { Prisma } from "@prisma/client";
import { Grade, Response } from "../../../../types";
export declare function create(data: Prisma.GradeCreateInput): Promise<Response<Grade>>;
