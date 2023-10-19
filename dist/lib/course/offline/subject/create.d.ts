import { Prisma } from "@prisma/client";
export declare function create(data: Prisma.SubjectCreateInput): Promise<{
    status: number;
    data: Prisma.SubjectGetPayload<any>;
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
