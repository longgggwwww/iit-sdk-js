export declare function deleteMany(ids: number[]): Promise<{
    status: number;
    data: any;
    err?: undefined;
} | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
