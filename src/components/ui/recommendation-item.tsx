"use client"

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
    user: User;
}

export const RecommendationItem = ({user}: Props) => {
    const [following, setFollowing] = useState(false);

    const handeleFollowButton = () => {
        setFollowing(true);
    }
    
    return (
        <div className="flex items-center">
            <div className="pl-2 w-40">
                {!following &&
                <Button 
                    label="Descreva"
                    onClick={handeleFollowButton}
                    size={3}
                />
                }
            </div>
        </div>
    );
}
