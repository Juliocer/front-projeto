"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import api from "@/utils/api"; // Importando o axios

export const SignupForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Para exibir mensagens de erro

    const handleCreateAccount = async () => {
        try {
            const response = await api.post("/auth/signup", {
                name: nameField,
                email: emailField,
                password: passwordField,
            });

            // Caso o cadastro seja bem-sucedido, o backend retornará um token
            const { token, user } = response.data;
            localStorage.setItem("token", token); // Armazenando o token no localStorage
            router.replace('/home'); // Redireciona para a página inicial
        } catch (error) {
            setErrorMessage("Erro ao criar a conta. Tente novamente.");
            console.error("Erro no cadastro:", error);
        }
    };

    return (
        <div>
            <Input
                placeholder="Digite seu nome"
                value={nameField}
                onChange={setNameField}  // Passando a função diretamente para alterar o estado
            />
            <Input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={setEmailField}  // Passando a função diretamente para alterar o estado
            />
            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={setPasswordField}  // Passando a função diretamente para alterar o estado
                password
            />
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}

            <Button 
                label="Criar conta"
                onClick={handleCreateAccount}
                size={1}
            />    
        </div>
    );
};
