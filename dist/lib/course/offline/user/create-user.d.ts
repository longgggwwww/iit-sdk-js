import { Prisma, User } from "@prisma/client";
export declare function createUser(userData: Prisma.UserCreateInput): Promise<User>;
