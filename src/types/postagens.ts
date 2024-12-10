import { User } from "./user";

export type Postagens = {
    id: number;
    user: User;
    body: string;
    image?: string;
    dataPost: Date;
}
