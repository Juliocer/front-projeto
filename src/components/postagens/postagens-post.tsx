"use client"

import { user } from "@/data/user"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../ui/button"
import Link from "next/link"
import { GeneralHeader } from "../ui/general-header"
import { NavItem } from "../nav/nav-item"
import router, { useRouter } from "next/navigation"


export const PostagensPost = () => {
    const router = useRouter();

    const handleImageUpload = () => {

    }

    const handlePostClick = () => {
        
    }

    const handleEnterButton = () => {
        router.replace('/formulario');
    }
    
    return(
        <div className="flex gap-3 px-4 py-3 border-b-2 border-gray-900">
            <div>
                <img 
                    src={user.avatar}
                    alt={user.name}
                    className="size-12 rounded-full"
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-center items-center mt-1 ">
                    <div className="w-28">
                        <Button 
                            label="Postar" 
                            size={2} 
                            onClick={handleEnterButton}/>
                    </div>
                </div>
            </div>
        </div>
    )
}