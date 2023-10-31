import { Prisma } from "@prisma/client";
import { Response, Transcript } from "../../../../types";
export declare function create(data: Prisma.TranscriptCreateInput): Promise<Response<Transcript>>;
