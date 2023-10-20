import { Prisma } from "@prisma/client";
import { Response, BookSeries } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BookSeriesWhereUniqueInput;
    where?: Prisma.BookSeriesWhereInput;
    orderBy?: Prisma.BookSeriesOrderByWithRelationInput;
}): Promise<Response<BookSeries[]>>;
