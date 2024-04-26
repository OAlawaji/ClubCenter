import React from "react";
import Card from './card.jsx'; // replace './Card' with the actual path to your Card component

function Container({ content }) {
    return (
        <div className="max-w-[1248px] w-full">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-white">{content.titleEnglish}</h1>
                <h1 className="text-2xl font-bold text-white">{content.titleArabic}</h1>
            </div>

            <div className="h-full grid gap-x-16 gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-8">
                {content.content}
            </div>
        </div>
    )
}
export default Container;