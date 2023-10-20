import { Prisma } from "@prisma/client";
import { Response, Subject } from "../../../../types";
export declare function update(id: string, data: Prisma.SubjectUpdateInput): Promise<Response<Subject>>;
