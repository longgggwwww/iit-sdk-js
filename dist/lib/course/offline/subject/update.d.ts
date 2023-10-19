import { Prisma } from "@prisma/client";
export declare function update(id: string, data: Prisma.SubjectUpdateInput): Promise<{
    status: number;
    data: Prisma.SubjectGetPayload<any>;
    err?: undefined;
} | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
