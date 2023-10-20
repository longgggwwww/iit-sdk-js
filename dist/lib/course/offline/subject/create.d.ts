import { Prisma } from "@prisma/client";
import { Response, Subject } from "../../../../types";
export declare function create(data: Prisma.SubjectCreateInput): Promise<Response<Subject>>;
