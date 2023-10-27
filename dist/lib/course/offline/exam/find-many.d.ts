import { Prisma } from "@prisma/client";
import { Response, Exam } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExamWhereUniqueInput;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput;
}): Promise<Response<Exam[]>>;
