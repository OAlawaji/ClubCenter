import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/card";
import Container from "./components/container";


function App() {
  const containerContent = {
    titleArabic : "الفعاليات القادمة",
    titleEnglish : "Upcoming Events",
    content : [<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>]
  
  }
  const containerContent2 = {
    titleArabic : "أندية الجامعة",
    titleEnglish : "KFUPM Clubs",
    content : [<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>]
  
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center overflow-hidden gap-16 mt-8 px-4 font-kanit">
      <Container content={containerContent} />
      <Container content={containerContent2} />

        <div className="max-w-[1248px] w-full">
          <img src="src\assets\image.png" alt="image" className="w-full" />
        </div>
        <div className="max-w-[1248px] w-full">
          <img src="src\assets\image.png" alt="image" className="w-full" />
        </div>
        <div className="max-w-[1248px] w-full">
          <img src="src\assets\image.png" alt="image" className="w-full" />
        </div>
      </main>
    </>
  );
}

export default App;
