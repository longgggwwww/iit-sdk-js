import { Prisma } from "@prisma/client";
import { Response, Year } from "../../../../types";
export declare function create(data: Prisma.YearCreateInput): Promise<Response<Year>>;
