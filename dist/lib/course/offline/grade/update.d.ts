import { Prisma } from "@prisma/client";
import { Grade, Response } from "../../../../types";
export declare function update(id: string, data: Prisma.GradeUpdateInput): Promise<Response<Grade>>;
