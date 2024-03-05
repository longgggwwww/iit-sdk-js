import { Prisma } from "@prisma/client";
import { Calendar, Response } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CalendarWhereUniqueInput;
    where?: Prisma.CalendarWhereInput;
    orderBy?: Prisma.CalendarOrderByWithRelationInput;
}): Promise<Response<Calendar[]>>;
