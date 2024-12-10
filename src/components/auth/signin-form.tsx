"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import api from "@/utils/api"; // Importando o axios

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Para exibir mensagens de erro
    const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento

    const handleEnterButton = async () => {
        // Verificar se os campos não estão vazios
        if (!emailField || !passwordField) {
            setErrorMessage("Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true); // Começar a carregar enquanto a requisição é feita

        try {
            const response = await api.post("/auth/signin", {
                email: emailField,
                password: passwordField,
            });

            // Caso a autenticação seja bem-sucedida, você pode armazenar o token e redirecionar
            const { token, user } = response.data;
            localStorage.setItem("token", token); // Armazenando o token no localStorage
            router.replace('/home'); // Redireciona para a página inicial
        } catch (error: any) {
            // Tratar diferentes tipos de erros
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.error || "Erro ao fazer login.");
            } else {
                setErrorMessage("Erro ao se conectar ao servidor.");
            }
            console.error("Erro no login:", error);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    return (
        <div>
            <Input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={(newValue: string) => setEmailField(newValue)} // Passando apenas o valor
            />
            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={(newValue: string) => setPasswordField(newValue)} // Passando apenas o valor
                password
            />

            {errorMessage && <div className="text-red-500">{errorMessage}</div>}

            <Button
                label={loading ? "Carregando..." : "Entrar"}
                onClick={handleEnterButton}
                size={1}
                disabled={loading} // Desabilita o botão enquanto carrega
            />
        </div>
    );
};
