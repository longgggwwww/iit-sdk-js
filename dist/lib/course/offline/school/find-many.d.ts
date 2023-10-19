import { Prisma } from "@prisma/client";
import { Response } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SchoolWhereUniqueInput;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput;
}): Promise<Response<({
    grades: ({
        classes: {
            id: number;
            name: string;
            yearId: number;
            gradeId: number;
        }[];
    } & {
        id: number;
        label: number;
        description: string | null;
        schoolId: number;
        createdAt: Date;
        updatedAt: Date;
    })[];
} & {
    id: number;
    code: string;
    name: string;
    description: string | null;
    logo: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>>;
