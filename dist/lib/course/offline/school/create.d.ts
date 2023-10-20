import { Prisma } from "@prisma/client";
import { Response, School } from "../../../../types";
export declare function create(data: Prisma.SchoolCreateInput): Promise<Response<School>>;
