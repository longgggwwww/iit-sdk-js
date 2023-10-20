import { Prisma } from "@prisma/client";
import { Response, Category } from "../../../../types";
export declare function create(data: Prisma.CategoryCreateInput): Promise<Response<Category>>;
