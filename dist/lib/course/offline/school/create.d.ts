import { Prisma } from "@prisma/client";
type MyResponse<T> = {
    status: number;
    data?: T;
    err?: {
        message: string;
        detail?: string;
    };
};
export declare function create(data: Prisma.SchoolCreateInput): Promise<MyResponse<{
    id: number;
    code: string;
    name: string;
    description: string | null;
    logo: string | null;
    createdAt: Date;
    updatedAt: Date;
}>>;
export {};
