import { Prisma } from "@prisma/client";
declare const subjectPopulated: {
    include: {
        grade: true;
        topics: {
            include: {
                category: true;
            };
        };
    };
};
export type SubjectList = Prisma.SubjectGetPayload<typeof subjectPopulated>;
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubjectWhereUniqueInput;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput;
}): Promise<{
    status: number;
    data: ({
        grade: {
            id: number;
            label: number;
            description: string | null;
            schoolId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        topics: ({
            category: {
                id: number;
                name: string;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            name: string;
            description: string | null;
            subjectId: number;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        })[];
    } & {
        id: number;
        name: string;
        description: string | null;
        gradeId: number;
        createdAt: Date;
        updatedAt: Date;
    })[];
    err?: undefined;
} | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
export {};
