"use client"

import { Postagens } from "@/types/postagens";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faHeart as faHeardFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import router from "next/dist/client/router";



type Props = {
    postagens: Postagens;
    hideComments?: boolean;
}

export const PostagensItem = ({postagens, hideComments}: Props) => {
    const [liked, setLiked] = useState(postagens.liked);
    
    const handleEnterButton = () => {
        router.replace('/home');
    }
    
    const handleLikeButton = () => {
        setLiked(!liked)
    }

    return (
        <div className="flex gap-1 p-3 border-b-2 border-gray-900">
            <div className="flex-shrink-0">
                <Link href={`/${postagens.user.slug}`}>
                    <img 
                        src={postagens.user.avatar} 
                        alt={postagens.user.name}
                        className="w-10 h-10 rounded-full"
                    />
                </Link>
            </div>

            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3">
                    <div className="ml-2 mt-2">
                        <Link href={`/${postagens.user.slug}`}>{postagens.user.name}</Link>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">@{postagens.user.slug} - {formatRelativeTime(postagens.dataPost)}</div>
                </div>

                <div className="flex px-2 py-2 items-center justify-center">
                    <div className="flex-1">
                        <div className=" text-lg py-1 w-3/4 truncate" title={postagens.body}>
                            {postagens.body}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-end items-center">
                            <div className="w-28">
                                <Button 
                                label="Ver mais" 
                                size={3} 
                                onClick={handleEnterButton}/>
                            </div>
                        </div>
                    </div>
                </div>

                {postagens.image && 
                    <div className="w-full mt-2">
                        <img 
                            src={postagens.image} 
                            alt="" 
                            className="w=full rounded-2xl"
                        />
                    </div>
                }
                <div className="flex justify-center items-center mt-3 text-gray-500">
                    {!hideComments && 
                    <div className="flex-1">
                        <Link href={`/postagens/${postagens.id}`}>
                            <div className="ml-20 flex items-center justify-center gap-2 curso-pointer">
                                <FontAwesomeIcon icon={faComment} className="h-6 w-6" />
                                <div className="text-lg">{postagens.commentCount}</div>
                            </div>
                        </Link>
                    </div>
                    }
                    <div className="flex-1">
                        <div onClick={handleLikeButton} className={`ml-2 inline-flex gap-2 cursor-pointer ${liked && 'text-red-400'}`}>
                            <FontAwesomeIcon icon={liked ? faHeardFilled : faHeart} className="h-6 w-6" />
                            <div className="text-lg">{postagens.likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

