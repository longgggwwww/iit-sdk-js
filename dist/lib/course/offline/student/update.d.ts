import { Prisma } from "@prisma/client";
import { Response, Student } from "../../../../types";
export declare function update(id: string, data: Prisma.StudentUpdateInput): Promise<Response<Student>>;
