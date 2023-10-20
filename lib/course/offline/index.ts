export * as school from "./school";
export * as grade from "./grade";
export * as subject from "./subject";
export * as year from "./year";
export * as class from "./class";
export * as category from "./category";
export * as topic from "./topic";

export let server: string = "prod.db";

export function connect(url?: string): void {
  if (url) {
    server = url;
  }
}
