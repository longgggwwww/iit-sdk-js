import { Prisma } from "@prisma/client";
import { Response, Transcript } from "../../../../types";
export declare function update(id: string, data: Prisma.TranscriptUpdateInput): Promise<Response<Transcript>>;
