import { StartupSnapshot } from "v8";

export type User = {
    slug: string;
    name: string;
    avatar: string;
    cover?: String;
    bio?: string;
    link?: string;
    postCount?: number;
}