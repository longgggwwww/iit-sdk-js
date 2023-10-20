import { Prisma } from "@prisma/client";
import { Response, Document } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DocumentWhereUniqueInput;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput;
}): Promise<Response<Document[]>>;
