export * from "./school";
export * from "./grade";
export * from "./subject";

declare module "./index" {
  export * from "./school";
  export * from "./subject";
}
