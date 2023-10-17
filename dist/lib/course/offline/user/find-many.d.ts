export declare function findManyUsers(): Promise<({
    posts: {
        id: number;
        title: string;
        content: string | null;
        published: boolean | null;
        authorId: number | null;
    }[];
} & {
    id: number;
    email: string;
    name: string | null;
})[]>;
