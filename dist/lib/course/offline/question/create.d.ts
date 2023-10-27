import { Prisma } from "@prisma/client";
import { Response, Question } from "../../../../types";
export declare function create(data: Prisma.QuestionCreateInput): Promise<Response<Question>>;
