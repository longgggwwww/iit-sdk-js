import { Prisma } from "@prisma/client";
import { Response, Document } from "../../../../types";
export declare function create(data: Prisma.DocumentCreateInput): Promise<Response<Document>>;
