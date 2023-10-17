export * as school from "./school";

export let server: string = "prod.db";

export function connect(url?: string): void {
  if (url) {
    server = url;
  }
}
