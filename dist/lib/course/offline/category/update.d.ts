import { Prisma } from "@prisma/client";
import { Response, Category } from "../../../../types";
export declare function update(id: string, data: Prisma.CategoryUpdateInput): Promise<Response<Category>>;
