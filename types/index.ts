export * from "./bookseries";
export * from "./calendar";
export * from "./category";
export * from "./class";
export * from "./document";
export * from "./exam";
export * from "./grade";
export * from "./question";
export * from "./school";
export * from "./student";
export * from "./subject";
export * from "./topic";
export * from "./transcript";
export * from "./year";

export type Response<T> = {
  status?: number;
  data?: T;
  err?: {
    message: string;
    detail?: string;
  };
};
