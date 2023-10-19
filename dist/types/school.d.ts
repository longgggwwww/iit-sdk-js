import { Prisma } from "@prisma/client";
declare const schoolPopulated: {
    include: {
        grades: {
            include: {
                classes: true;
            };
        };
    };
};
export type School = Prisma.SchoolGetPayload<typeof schoolPopulated>;
export {};
