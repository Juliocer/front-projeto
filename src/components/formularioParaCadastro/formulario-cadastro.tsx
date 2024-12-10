"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textares"; // Corrigido o nome do componente

export const FormularioCadastro = () => {
    const router = useRouter();
    const [localizacao, setLocalizacao] = useState("");
    const [tipoDeChamado, setTipoDeChamado] = useState<string[]>([]);
    const [descricao, setDescricao] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleTipoDeChamadoChange = (tipo: string) => {
        setTipoDeChamado(prevState =>
            prevState.includes(tipo) ? prevState.filter(item => item !== tipo) : [...prevState, tipo]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            localizacao,
            tipoDeChamado,
            body: descricao,
            image,
        };

        // Obtém o token JWT do localStorage
        const token = localStorage.getItem('authToken');

        if (!token) {
            console.error("Token JWT não encontrado.");
            return;
        }

        try {
            const response = await fetch("/api/postagens", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // Envia o token no cabeçalho Authorization
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.replace("/home");
            } else {
                console.error("Erro ao criar o formulário");
                // Aqui você pode lidar com erros, como exibir uma mensagem para o usuário
            }
        } catch (error) {
            console.error("Erro de rede:", error);
            // Lidar com erro de rede
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="Informa a localidade da incidência?"
                value={localizacao}
                onChange={(newValue: string) => setLocalizacao(newValue)} // Corrigido para tipar corretamente
            />


            <div className="mt-3">
                <p className="text-lg text-gray-500 mb-2">Selecione o tipo de chamado</p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <input
                            type="checkbox"
                            className="h-6 w-6 text-blue-500 rounded border-gray-300 focus:ring focus:ring-blue-300"
                            onChange={() => handleTipoDeChamadoChange("Estrutural / Físico")}
                        />
                        <label className="text-gray-400">Estrutural / Físico</label>
                    </li>
                    <li className="flex items-center gap-4">
                        <input
                            type="checkbox"
                            className="h-6 w-6 text-blue-500 rounded border-gray-300 focus:ring focus:ring-blue-300"
                            onChange={() => handleTipoDeChamadoChange("Acessibilidade")}
                        />
                        <label className="text-gray-400">Acessibilidade</label>
                    </li>
                </ul>
            </div>

            <label className="mt-3">
                <p className="text-lg text-gray-500 mb-2">Descreva a incidência</p>
                <Textarea
                    placeholder="Exemplo: Esta atrapalhando a entrada na sala..."
                    rows={4}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)} // Passando a função onChange
                />

            </label>

            <Button
                label="Finalizar"
                size={1}
                type="submit"
            />
        </form>
    );
};
