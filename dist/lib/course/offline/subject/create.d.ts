import { Prisma } from "@prisma/client";
export declare function create(data: Prisma.SubjectCreateInput): Promise<{
    status: number;
    data: {
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
    };
    message?: undefined;
    err?: undefined;
} | {
    status: number;
    message: string;
    err: {
        detail: any;
    };
    data?: undefined;
}>;
