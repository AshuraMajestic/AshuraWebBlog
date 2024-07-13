"use client"
import { useState } from "react";
import IMG from "../../_assets/pp.png";
import BOOK from "../../_assets/book.svg";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function BlogDetail({ username, title, introduction, content, minutes, createdAt }) {


    return (
        <div className="container mx-auto my-20 blog-style">
            <div className="flex w-full">
                <div className="hidden sm:hidden md:block md:w-1/12 lg:block lg:w-1/12"></div>

                {/* Middle Column */}
                <div className="w-full sm:w-full md:w-10/12 lg:w-10/12 blog-detail p-6 rounded-lg">
                    <div className="grid gap-4 w-full overflow-hidden">
                        <div className="row">
                            <h1 className="text-white text-center text-4xl font-bold mt-4 mb-3 ">
                                {title}
                            </h1>
                        </div>
                        <div className="row flex space-x-4">
                            <div className="w-4/12 flex flex-row items-center justify-center">
                                <Image src={IMG} alt="profile" className="w-10 pp" />
                                <p className="text-white ms-2 text-base">{username}</p>
                            </div>
                            <div className="w-4/12  flex flex-row items-center justify-center">
                                <p className="text-white text-base">
                                    {new Date(createdAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className="w-4/12  flex flex-row items-center justify-center">
                                <Image src={BOOK} alt="book" className="w-7" />
                                <p className="text-white ms-4 text-base">{minutes} min</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="row my-3 text-white text-xl mt-5">
                            <p>{introduction}</p>
                        </div>
                        <div className="row my-3 text-white prose lg:prose-xl ">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:hidden md:block md:w-1/12 lg:block lg:w-1/12"></div>
            </div>
        </div>
    )
}
