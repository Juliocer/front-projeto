"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textares";

export const FormularioCadastro = () => {
    const router = useRouter();

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return(
        <>
            <Input 
                placeholder="Informa a localidade da incidência?"
            />

            <div className="mt-3">
                <p className="text-lg text-gray-500 mb-2">Selecione o tipo de chamado</p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <input type="checkbox" className="h-6 w-6 text-blue-500 rounded border-gray-300 focus:ring focus:ring-blue-300"/>
                        <label className="text-gray-400">Estrutural / Físico</label>
                    </li>
                    <li className="flex items-center gap-4">
                        <input type="checkbox" className="h-6 w-6 text-blue-500 rounded border-gray-300 focus:ring focus:ring-blue-300"/>
                        <label className="text-gray-400">Acessibilidade</label>
                    </li>
                </ul>
            </div>
            
            <label className="mt-3">
                <p className="text-lg text-gray-500 mb-2">Descreva a incidencia</p>
                <Textarea 
                    placeholder="Exemplo: Esta atrapalhando a entrada na sala. Aqui e na onde vc coloca como este insidente esta de afetando"
                    rows={4}
                    value=""
                />
            </label>

            <Button 
                label="Finalizar"
                size={1}
                onClick={handleEnterButton}
            />
        </>
    );
}