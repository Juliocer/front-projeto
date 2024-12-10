"use client"

import { user } from "@/data/user"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../ui/button"
import Link from "next/link"
import { GeneralHeader } from "../ui/general-header"
import { NavItem } from "../nav/nav-item"
import router, { useRouter } from "next/navigation"
import TemaAlternar from "../temaAlternar/TemaAlternar"


export const PostagensPost = () => {
    const router = useRouter();

    const handleEnterButton = () => {
        router.replace('/formulario');
    }
    
    return(
        <div className="flex gap-3 px-4 py-3 mt-1 mb-2">
            <div className="flex-1">
            <TemaAlternar />
                <div className="flex justify-center items-center">
                    <div className="w-40 mt-2 mb-2">
                        <Button 
                            label="Abrir Chamado" 
                            size={1} 
                            onClick={handleEnterButton}/>
                    </div>
                </div>
            </div>
        </div>
    )
}