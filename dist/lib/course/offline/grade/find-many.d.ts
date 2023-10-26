import { Prisma } from "@prisma/client";
import { Grade, Response } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GradeWhereUniqueInput;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput;
}): Promise<Response<Grade[]>>;
