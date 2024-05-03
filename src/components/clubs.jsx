import React from "react";
import Card from './card.jsx'; // replace './Card' with the actual path to your Card component

function Container({ content }) {
    return (
        <div className="max-w-[1348px] w-full">
            <div className="flex justify-between">
            <h1 className="text-xl sm:text-3xl font-bold text-sakry" >{content.titleEnglish}</h1>
<h1 className="text-xl sm:text-3xl font-almarai font-extrabold text-sakry" >{content.titleArabic}</h1>
            </div>

            <div className="h-full grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-8">
                {content.content}
            </div>
        </div>
    )
}
export default Container;