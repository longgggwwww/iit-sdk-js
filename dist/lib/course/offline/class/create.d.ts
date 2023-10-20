import { Prisma } from "@prisma/client";
import { Response, Class } from "../../../../types";
export declare function create(data: Prisma.ClassCreateInput): Promise<Response<Class>>;
