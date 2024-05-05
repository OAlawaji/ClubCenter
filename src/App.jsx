import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/card";
import Container from "./components/container";
import Club from "./components/club";
import Clubs from "./components/clubs";
import Welcome from "./components/welcome.jsx";
import { clubs, events} from './db.js';
import Footer from "./components/footer.jsx";
function App() {
  const clubsArray = Object.values(clubs);
  const eventsArray = Object.values(events);
  const containerContent = {
    titleArabic : "الفعاليات القادمة",
    titleEnglish : "Upcoming Events",
    content : eventsArray.map((eventData, index) => <Card key={index} eventData={eventData} />)  
  }
  const containerContent2 = {
    titleArabic : "أندية الجامعة",
    titleEnglish : "KFUPM Clubs",
    content : clubsArray.map((clubData, index) => <Club key={index} clubData={clubData} />)  
}
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col items-center justify-center overflow-hidden gap-16 mt-8 px-4 text-sakry font-kanit">
        




      <Welcome/>
      <Container content={containerContent} />
      <Clubs content={containerContent2} />

        {/* <div className="max-w-[1248px] w-full">
          <img src="src\assets\image.png" alt="image" className="w-full text-sakry" />
        </div>
        <div className="max-w-[1248px] w-full">
          <img src="src\assets\image.png" alt="image" className="w-full text-sakry" />
        </div> */}
      </main>

        <Footer />

    </>
  );
}

export default App;
