import { Prisma } from "@prisma/client";
import { AxiosResponse } from "axios";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SchoolWhereUniqueInput;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput;
}): Promise<AxiosResponse<({
    grades: {
        id: number;
        name: string;
        description: string | null;
        schoolId: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: number;
    code: string;
    name: string;
    description: string | null;
    logo: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>>;
