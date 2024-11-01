"use client"

import { Postagens } from "@/types/postagens";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faHeart as faHeardFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";


type Props = {
    postagens: Postagens;
}

export const PostagensItem = ({postagens}: Props) => {
    const [liked, setLiked] = useState(postagens.liked);

    const handleLikeButton = () => {
        setLiked(!liked)
    }

    return (
        <div className="flex gap-2 p-6 border-b-2 border-gray-900">
            <div>
                <Link href={`/${postagens.user.slug}`}>
                    <img 
                        src={postagens.user.avatar} 
                        alt={postagens.user.name}
                        className="size-10 rounded-full"
                    />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3">
                    <div className="">
                        <Link href={`/${postagens.user.slug}`}>{postagens.user.name}</Link>
                    </div>
                    <div className="text-xs text-gray-500">@{postagens.user.slug} - {formatRelativeTime(postagens.dataPost)}</div>
                </div>
                <div className="py-4 text-lg">{postagens.body}</div>
                {postagens.image && 
                    <div className="w-full">
                        <img 
                            src={postagens.image} 
                            alt="" 
                            className="w=full rounded-2xl"
                        />
                    </div>
                }
                <div className="flex mt-6 text-gray-500">
                    <div className="flex-1">
                        <Link href={`/postagens/${postagens.id}`}>
                            <div className="inline-flex items-center gap-2 curso-pointer">
                                <FontAwesomeIcon icon={faComment} className="size-6" />
                                <div className="text-lg">{postagens.commentCount}</div>
                            </div>
                            
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 curso-pointer">
                            <FontAwesomeIcon icon={faRetweet} className="size-6" />
                            <div className="text-lg">{postagens.retweetCount}</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div onClick={handleLikeButton} className={`inline-flex items-center gap-2 cursor-pointer ${liked && 'text-red-400'}`}>
                            <FontAwesomeIcon icon={liked ? faHeardFilled : faHeart} className="size-6" />
                            <div className="text-lg">{postagens.likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}