import { Prisma } from "@prisma/client";
import { Response, Topic } from "../../../../types";
export declare function update(id: string, data: Prisma.TopicUpdateInput): Promise<Response<Topic>>;
