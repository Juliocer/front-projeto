import { Postagens } from "@/types/postagens";
import { user } from "./user";

export const postagens: Postagens = {
    id: 123,
    user: user,
    body: 'Cadeira Quebrada na sala 6B ',
    image: 'https://www.lojadimovesc.com.br/imagens/209/cadeira-quebrada.jpg',
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0) 
}