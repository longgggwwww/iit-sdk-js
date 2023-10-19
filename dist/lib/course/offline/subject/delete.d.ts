export declare function deleteOne(id: number): Promise<{
    status: number;
    data: {
        grade: {
            id: number;
            label: number;
            description: string | null;
            schoolId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        topics: ({
            category: {
                id: number;
                name: string;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            name: string;
            description: string | null;
            subjectId: number;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        })[];
    } & {
        id: number;
        name: string;
        description: string | null;
        gradeId: number;
        createdAt: Date;
        updatedAt: Date;
    };
    err?: undefined;
} | {
    status: number | undefined;
    err: {
        message: string;
        detail: any;
    };
    data?: undefined;
}>;
