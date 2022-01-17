export interface User {
    image: {
        png: string;
        webp: string;
    };
    username: string;
}

export interface IComment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: Array<Reply>;
}

export type Reply = IComment & {
    replyingTo: string,
}
