import { Prisma } from "@prisma/client";
import { Response, Transcript } from "../../../../types";
export declare function findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TranscriptWhereUniqueInput;
    where?: Prisma.TranscriptWhereInput;
    orderBy?: Prisma.TranscriptOrderByWithRelationInput;
}): Promise<Response<Transcript[]>>;
