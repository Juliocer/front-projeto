"use client"; // Marque como Client Component

import { Postagens } from "@/types/postagens";
import { formatRelativeTime } from "@/utils/format-relative";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import router from "next/dist/client/router";

type Props = {
    postagens: Postagens;
    hideComments?: boolean;
}

export const PostagensItem = ({ postagens, hideComments }: Props) => {
    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <div className="flex gap-1 p-3 mb-6 bg-gray-500 dark:bg-gray-800 dark:text-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
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
                        <Link href={`/${postagens.user.slug}`} className="font-semibold text-blue-600">{postagens.user.name}</Link>
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
                                    onClick={handleEnterButton}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {postagens.image && 
                    <div className="w-full mt-2">
                        <img 
                            src={postagens.image} 
                            alt="" 
                            className="w-full rounded-2xl"
                        />
                    </div>
                }
            </div>
        </div>
    );
}
