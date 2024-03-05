import { Prisma } from "@prisma/client";
import { Calendar, Response } from "../../../../types";
export declare function create(data: Prisma.CalendarCreateInput): Promise<Response<Calendar>>;
