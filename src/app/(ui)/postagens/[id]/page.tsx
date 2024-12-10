import { PostagensItem } from "@/components/postagens/postagens-item";
import { PostagensPost } from "@/components/postagens/postagens-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { postagens } from "@/data/postagens";

export default function Page(){
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Voltar</div>
            </GeneralHeader>

            <div className="border-t-2 border-gray-900">
                <PostagensItem postagens={postagens} />

                 <div className="border-y-8 border-gray-900">
                    <PostagensPost />
                 </div>

                 <PostagensItem postagens={postagens} hideComments />
            </div>
        </div>
    );
}
