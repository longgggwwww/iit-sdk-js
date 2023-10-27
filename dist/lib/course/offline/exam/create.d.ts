import { Prisma } from "@prisma/client";
import { Response, Exam } from "../../../../types";
export declare function create(data: Prisma.ExamCreateInput): Promise<Response<Exam>>;
