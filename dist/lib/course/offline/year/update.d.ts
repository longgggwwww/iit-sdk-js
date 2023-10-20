import { Prisma } from "@prisma/client";
import { Response, Year } from "../../../../types";
export declare function update(id: string, data: Prisma.YearUpdateInput): Promise<Response<Year>>;
