import { Prisma } from "@prisma/client";
import { Response, Class } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClassWhereUniqueInput;
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput;
}): Promise<Response<Class[]>>;
