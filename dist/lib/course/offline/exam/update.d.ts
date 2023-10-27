import { Prisma } from "@prisma/client";
import { Response, Exam } from "../../../../types";
export declare function update(id: string, data: Prisma.ExamUpdateInput): Promise<Response<Exam>>;
