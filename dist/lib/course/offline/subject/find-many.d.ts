import { Prisma } from "@prisma/client";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubjectWhereUniqueInput;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput;
}): Promise<{
    status: number;
    data: Prisma.SubjectGetPayload<any>[];
    err?: undefined;
} | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
