import { Prisma } from "@prisma/client";
import { Response, BookSeries } from "../../../../types";
export declare function create(data: Prisma.BookSeriesCreateInput): Promise<Response<BookSeries>>;
