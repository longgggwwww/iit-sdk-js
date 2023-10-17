export declare function deleteOne(id: number): Promise<import("axios").AxiosResponse<{
    grades: ({
        classes: {
            id: number;
            name: string;
            yearId: number;
            gradeId: number;
        }[];
    } & {
        id: number;
        name: string;
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
}>>;