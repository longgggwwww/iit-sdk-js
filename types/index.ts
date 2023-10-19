export * from "./school";
export * from "./grade";
export * from "./subject";

export type Response<T> = {
  status?: number;
  data?: T;
  err?: {
    message: string;
    detail?: string;
  };
};
