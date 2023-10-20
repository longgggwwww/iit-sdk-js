import { Prisma } from "@prisma/client";
import { Response, BookSeries } from "../../../../types";
export declare function update(id: string, data: Prisma.BookSeriesUpdateInput): Promise<Response<BookSeries>>;
