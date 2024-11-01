import { postagens } from "@/data/postagens";
import { PostagensItem } from "../postagens/postagens-item";

export const HomeFeed = () => {
    return (
        <div>
            <PostagensItem postagens={postagens}/>
            <PostagensItem postagens={postagens}/>
            <PostagensItem postagens={postagens}/>
            <PostagensItem postagens={postagens}/>
        </div>
    );
}