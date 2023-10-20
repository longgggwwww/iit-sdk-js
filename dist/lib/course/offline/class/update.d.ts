import { Prisma } from "@prisma/client";
import { Response, Class } from "../../../../types";
export declare function update(id: string, data: Prisma.ClassUpdateInput): Promise<Response<Class>>;
