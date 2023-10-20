import { Prisma } from "@prisma/client";
import { Response, School } from "../../../../types";
export declare function update(id: string, data: Prisma.SchoolUpdateInput): Promise<Response<School>>;
