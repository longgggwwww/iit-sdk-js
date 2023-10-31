export * as school from "./school";
export * as grade from "./grade";
export * as subject from "./subject";
export * as year from "./year";
export * as class from "./class";
export * as category from "./category";
export * as bookseries from "./bookseries";
export * as topic from "./topic";
export * as document from "./document";
export * as student from "./student";
export * as question from "./question";
export * as exam from "./exam";
export * as transcript from "./transcript";

export let server: string = "prod.db";

export function connect(url?: string): void {
  if (url) {
    server = url;
  }
}
