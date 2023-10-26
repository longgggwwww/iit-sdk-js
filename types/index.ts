export * from "./school";
export * from "./grade";
export * from "./subject";
export * from "./year";
export * from "./class";
export * from "./category";
export * from "./bookseries";
export * from "./topic";
export * from "./document";
export * from "./student";

export type Response<T> = {
  status?: number;
  data?: T;
  err?: {
    message: string;
    detail?: string;
  };
};
