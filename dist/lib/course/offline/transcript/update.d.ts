import { Prisma } from "@prisma/client";
import { Response, Transcript } from "../../../../types";
export declare function update(id: string, data: {
    update: Prisma.TranscriptUpdateInput;
    create: Prisma.TranscriptCreateInput;
}): Promise<Response<Transcript>>;
