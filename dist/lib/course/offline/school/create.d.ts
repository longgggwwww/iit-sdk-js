import { Prisma } from "@prisma/client";
export declare function create(data: Prisma.SchoolCreateInput): Promise<{
    status: number;
    data: {
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
    };
    err?: undefined;
} | {
    status: number;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
