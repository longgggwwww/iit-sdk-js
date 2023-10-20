import { Prisma } from "@prisma/client";
import { Response, Topic } from "../../../../types";
export declare function create(data: Prisma.TopicCreateInput): Promise<Response<Topic>>;
