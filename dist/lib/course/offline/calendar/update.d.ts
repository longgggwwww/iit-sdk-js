import { Prisma } from "@prisma/client";
import { Calendar, Response } from "../../../../types";
export declare function update(id: string, data: Prisma.CalendarUpdateInput): Promise<Response<Calendar>>;
