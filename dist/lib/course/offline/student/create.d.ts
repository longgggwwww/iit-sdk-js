import { Prisma } from "@prisma/client";
import { Response, Student } from "../../../../types";
export declare function create(data: Prisma.StudentCreateInput): Promise<Response<Student>>;
