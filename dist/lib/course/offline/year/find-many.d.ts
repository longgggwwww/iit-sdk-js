import { Prisma } from "@prisma/client";
import { Response, Year } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.YearWhereUniqueInput;
    where?: Prisma.YearWhereInput;
    orderBy?: Prisma.YearOrderByWithRelationInput;
}): Promise<Response<Year[]>>;
