import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

function CardLoad({ onClick, full, type }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex 
    justify-center 
    items-center
    py-2
    rounded
    group
    relative
    mb-4
    "
    >
      <div className="flex absolute left-0 right-0 items-center">
        <div className="flex-1 h-px bg-sakry
        
        " />
        <div
          className="flex
            cursor-pointer
            px-2

            "
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1
            className="
            font-semibold
            text-2xl
            transition-all
            duration-200
            hover:text-3xl
            mr-2"
          >
            {full
              ? type == "clubs"
                ? "Go Home"
                : "Show Less"
              : type == "clubs"
              ? "Browse Clubs"
              : "Show More"}
          </h1>
          {type == "events" && (
            <div style={{ transform: full ? "scaleX(-1)" : "scaleX(1)" }}>
              <RefreshIcon
                style={{
                  fontSize: 32,
                  transition: "transform 0.5s",
                  transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
                }}
              />
            </div>
          )}
        </div>
        <div className="flex-1 h-px bg-sakry" />
      </div>
    </div>
  );
}

export default CardLoad;
