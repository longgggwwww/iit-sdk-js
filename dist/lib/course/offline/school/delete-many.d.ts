export declare function deleteMany(id: number): Promise<import("axios").AxiosResponse<{
    id: number;
    code: string;
    name: string;
    description: string | null;
    logo: string | null;
    createdAt: Date;
    updatedAt: Date;
}>>;
