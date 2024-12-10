import { Postagens } from "@/types/postagens";
import { user } from "./user";

export const postagens: Postagens = {
    id: 123,
    user: user,
    body: 'Falta de acessibilidade',
    image: '/Captura de tela .png',
    dataPost: new Date(2024, 8, 1, 10, 0, 0) 
}