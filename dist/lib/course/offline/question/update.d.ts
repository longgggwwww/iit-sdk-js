import { Prisma } from "@prisma/client";
import { Response, Question } from "../../../../types";
export declare function update(id: string, data: Prisma.QuestionUpdateInput): Promise<Response<Question>>;
