import { User } from "./user";

export type Formulario = {
    id: number;
    localizacao: string,
    tipoDeChamado: string,
    // descreva a insidencia 
    body: string,
    image: string
    dataPost: Date;
    user: User;
}