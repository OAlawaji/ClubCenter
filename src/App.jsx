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

function App() {
  const [eventsToShow, setEventsToShow] = useState(3); // num of events in the main page
  const [clubsToShow, setClubsToShow] = useState(6); // num of clubs in the main page
  const [showContent, setShowContent] = useState(true);

  const [clubs, setClubs] = useState({});
  const [events, setEvents] = useState({});

  const handleFormSubmit = (eventData) => {
    setEvents([...Object.values(events), eventData]);
  };
 
  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/clubs').then(res => res.json()),
      fetch('http://localhost:8000/events').then(res => res.json())
    ])
    .then(([clubsData, eventsData]) => {
      // Update the clubs state with the fetched data
      setClubs(clubsData);
      setEvents(eventsData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const clubsArray = Object.values(clubs);
  const eventsArray = Object.values(events);

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
            setClubsToShow(6);
            setShowContent(true);
          }}
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
        <>
      <Navbar
        isHome = {showContent}
        returnHome = {() => setShowContent}
      />

            {/* <div>
            <button onClick={openForm}>Open Event Form</button>
{isFormOpen && <EventForm 
  onSubmit={handleFormSubmit} 
  isOpen={isFormOpen} 
  onRequestClose={closeForm}
/>}
\
    </div> */}
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
