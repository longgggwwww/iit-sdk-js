import { Prisma } from "@prisma/client";
import { Response, Document } from "../../../../types";
export declare function update(id: string, data: Prisma.DocumentUpdateInput): Promise<Response<Document>>;
