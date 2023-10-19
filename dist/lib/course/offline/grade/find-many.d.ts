import { Prisma } from "@prisma/client";
import { Response } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GradeWhereUniqueInput;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput;
}): Promise<Response<({
    classes: {
        id: number;
        name: string;
        yearId: number;
        gradeId: number;
    }[];
    school: {
        id: number;
        code: string;
        name: string;
        description: string | null;
        logo: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
    subjects: {
        id: number;
        name: string;
        description: string | null;
        gradeId: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: number;
    label: number;
    description: string | null;
    schoolId: number;
    createdAt: Date;
    updatedAt: Date;
})[]>>;
