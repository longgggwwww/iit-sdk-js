export declare function serv(file: string): Promise<import("axios").AxiosResponse<any> | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
}>;
