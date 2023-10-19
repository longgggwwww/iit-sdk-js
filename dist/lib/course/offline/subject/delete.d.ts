export declare function deleteOne(id: number): Promise<{
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
