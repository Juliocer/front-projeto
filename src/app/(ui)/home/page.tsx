import { HomeFeed } from "@/components/home/home-feed";
import { HomeHeader } from "@/components/home/home-header";
import { PostagensPost } from "@/components/postagens/postagens-post";

export default function Page(){
    return (
        <div>
            <HomeHeader />
            <PostagensPost />
            <HomeFeed />
        </div>
    );
}