export type Response<T> = {
    status?: number;
    data?: T;
    err?: {
        message: string;
        detail?: string;
    };
};
