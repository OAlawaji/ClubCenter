import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/card";
import Container from "./components/container";
import Club from "./components/club";
import Clubs from "./components/clubs";
import Welcome from "./components/welcome.jsx";
import CardLoad from "./components/cardLoad.jsx";
import { clubs, events } from "./db.js";
import Footer from "./components/footer.jsx";

function App() {
  const [eventsToShow, setEventsToShow] = useState(4); // Change this to the initial number of events you want to show
  const [clubsToShow, setClubsToShow] = useState(3); // Change this to the initial number of clubs you want to show
  const [showContent, setShowContent] = useState(true);

  const clubsArray = Object.values(clubs);
  const eventsArray = Object.values(events);

  const containerContent = {
    titleArabic: "الفعاليات القادمة",
    titleEnglish: "Upcoming Events",
    content: eventsArray
      .slice(0, eventsToShow)
      .map((eventData, index) => <Card key={index} eventData={eventData} />),
    loadMore:
      eventsArray.length > eventsToShow ? (
        <CardLoad
          full={false}
          type={"events"}
          onClick={() => setEventsToShow(eventsToShow + 4)}
        />
      ) : (
        <CardLoad
          full={true}
          type={"events"}
          onClick={() => setEventsToShow(4)}
        />
      ),
  };

  const containerContent2 = {
    titleArabic: "أندية الجامعة",
    titleEnglish: "KFUPM Clubs",
    content: clubsArray
      .slice(0, clubsToShow)
      .map((clubData, index) => <Club key={index} clubData={clubData} />),
    loadMore:
      clubsArray.length > clubsToShow ? (
        <CardLoad
          full={false}
          type={"clubs"}
          onClick={() => {
            setClubsToShow(clubsArray.length);
            setShowContent(false);
          }}
        />
      ) : (
        <CardLoad
          full={true}
          type={"clubs"}
          onClick={() => {
            setClubsToShow(3);
            setShowContent(true);
          }}
        />
      ),
  };
  return (
    <>
      <Navbar
        isHome = {showContent}
        returnHome = {() => setShowContent}
      />
      <main className="flex flex-col items-center justify-center overflow-hidden gap-16 mt-8 px-4 text-sakry font-kanit">
        {showContent && (
          <>
            <Welcome />
            <Container content={containerContent} />
          </>
        )}
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
