export declare function deleteOne(id: number): Promise<{
    status: number;
    data: {
        id: number;
        label: number;
        description: string | null;
        schoolId: number;
        createdAt: Date;
        updatedAt: Date;
    };
    err?: undefined;
} | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
