import React, { useState, useEffect } from 'react';
import Clubs from "./components/clubs";
import Welcome from "./components/welcome.jsx";
import CardLoad from "./components/cardLoad.jsx";
import Footer from "./components/footer.jsx";
// import SignIn from "./components/SignIn.jsx"
// import EventForm from "./components/eventForm.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from "./components/container.jsx";
import Card from "./components/card.jsx";
import Club from "./components/club.jsx"
import AddCard from "./components/addCard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { clubs, events } from "./db.js";
// import { useParams } from 'react-router-dom';

//npx json-server --watch data/db.json --port 8000
function App() {
  const [eventsToShow, setEventsToShow] = useState(4); // num of events in the main page
  const [clubsToShow, setClubsToShow] = useState(6); // num of clubs in the main page
  const [showContent, setShowContent] = useState(true);
  // const [showContent, setShowContent] = useState(true);
  

  // const handleClubLoadClick = () => {
  //   clubsArray.length > clubsToShow 
  //   &&
  //   setClubsToShow(clubs.length)

  // };

  const clubsArray = Object.values(clubs);
  const eventsArray = Object.values(events);
  // const [clubs, setClubs] = useState({});
  // const [events, setEvents] = useState({});

  const handleFormSubmit = (eventData) => {
    setEvents([eventData, ...Object.values(events)]);
  };
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const clubsData = await require('./data/db.json').clubs;
  //       const eventsData = await require('./data/db.json').events;

  //       setClubs(clubsData);
  //       setEvents(eventsData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


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
          onClick={() => setClubsToShow(clubs.length)}
          />
        ) : (
<CardLoad
  full={true}
  type={"clubs"}
  onClick={() => setClubsToShow(6)}
/>
        ),
      };
      const containerContent = {
        titleArabic: "الفعاليات القادمة",
        titleEnglish: "Upcoming Events",
        content: [
          <AddCard key="addCard" onSubmit={handleFormSubmit}/>,
          ...eventsArray
        .slice(0, eventsToShow)
        .map((eventData, index) => <Card key={index} eventData={eventData} />)
        ],
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
          onClick={() => setEventsToShow(3)}
        />
          ),
      };
      return (
        <Router>
          <Navbar 
          showAllClubs={() => setClubsToShow(clubs.length)} collapseClubs={() => {setClubsToShow(6)}} />
          <main className="flex flex-col items-center justify-center overflow-hidden gap-16 mt-8 px-4 text-sakry font-kanit">
            <Routes>
              <Route path='/' element={
                <>
                  <Welcome />
                  <Container content={containerContent} />
                  <Clubs content={containerContent2} />
                </>
              }/>
              <Route path='/Clubs' element={
                <Clubs content={containerContent2} />
              }/>
            </Routes>
          </main>
          <Footer />
        </Router>
      );
    }

export default App;
