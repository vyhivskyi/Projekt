import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Part from "./components/PartDS/Part";
import React, { useState } from "react";
import Homepage from "./pages/Homepage/Homepage"
import Akademiki from './pages/Akademiki/Akademiki';
import Error404 from "./pages/Error404/Error404";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import Info from "./pages/Profile/Info";
import PreferenceEdit from "./pages/Profile/PreferenceEdit";
import DS2Korytarz from "./pages/DS2/DS2Korytarz";
import DS2Kuchnia from "./pages/DS2/DS2Kuchnia";
import DS2Pokoj from "./pages/DS2/DS2Pokoj";
import DS3Korytarz from "./pages/DS3/DS3Korytarz";
import DS3Kuchnia from "./pages/DS3/DS3Kuchnia";
import DS3Pokoj from "./pages/DS3/DS3Pokoj";
import DS4Pokoj from "./pages/DS4/DS4Pokoj";
import DS4Kuchnia from "./pages/DS4/DS4Kuchnia";
import DS4Korytarz from "./pages/DS4/DS4Korytarz";
import Price from "./pages/Price/Price";
import Dokumenty from "./pages/Dokumenty/Dokumenty";
import Kontakt from "./pages/Kontakty/Kontakty";
import Message from "./pages/Profile/Zgłoszenie";
import CheckOut from "./pages/Profile/Wymeldowanie";
import Room from "./pages/Profile/Pokoj";
import Status from "./pages/Profile/Status";
import Odpowiedzi from "./pages/Profile/Odpowiedzi"
import Opiekun from "./pages/Opiekun/OpiekunProfile";
import OpiekunInfo from "./pages/Opiekun/OpiekunInfo";
import OpiekunStudenci from "./pages/Opiekun/OpiekunStudenci";
import OpiekunRooms from "./pages/Opiekun/OpiekunRooms";
import Kierownik from "./pages/Kierownik/KierownikProfile";
import KierownikInfo from "./pages/Kierownik/KierownikInfo";
import KierownikApplications from "./pages/Kierownik/KierownikApplications";
import OpiekunCheckOut from "./pages/Opiekun/OpiekunCheckOuts";
import StudentDetails from "./pages/Kierownik/StudentDetails";
import KierownikStudenci from "./pages/Kierownik/KierownikStudenci";
import Payment from "./pages/Profile/Opłata";
import KierownikRooms from "./pages/Kierownik/KierownikRooms";
import Odpowiedź from "./pages/Profile/Odpowiedź"
import OpiekunZgloszenia from "./pages/Opiekun/OpiekunZgloszenia"
import ZgloszeniaDetails from "./pages/Opiekun/ZgloszeniaDetails"
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Hej!',
      trigger: '1',
  }, {
      id: '1',
      message: 'Podaj swoje imię',
      trigger: '2'
  }, {
      id: '2',
      user: true, 
      trigger: '3',
  }, {
      id: '3',
      message: " Hej {previousValue}, masz pytania ? Jestem tutaj dla pomocy :)",
      trigger: 4
  }, {
      id: '4',
      options: [
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },
      ],
      end: true
  }
];

const theme = {
  background: '#f4f0ec',
  headerBgColor: '#86A397',
  headerFontSize: '20px',
  botBubbleColor: '#86A397',
  headerFontColor: '#292f36',
  botFontColor: '#292f36',
  userBubbleColor: '#292F36',
  userFontColor: 'white',
};
const config = {
  floating: true,
};


function App() {
  const user = localStorage.getItem("token");
  const [dane, setDane] = useState();
  const [userRole, setUserRole] = useState(null);
  const handleSetDane = (data) => {
    setDane(data);
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/profile", {
        headers: { 'Content-Type': 'application/json', 'x-access-token': user },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Błąd pobierania danych użytkownika");
        }
        return response.data;
      })
      .then((data) => {
        setDane(data.data);
        setUserRole(data.data.role);
      })
      .catch((error) => {
        console.error("Błąd pobierania roli użytkownika: ", error);
      });
  }, []);

  const [isChatBotOpen, setChatBotOpen] = useState(false);

  const handleToggleChatBot = () => {
    setChatBotOpen(!isChatBotOpen);
  };
  
  return (
    <Routes>
      {user && userRole === "Student" &&
        <Route
          path="/profile"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Info user={dane} />
            </div>}
        />
      }

      {user && userRole === "Student" &&
        <Route
          path="/profile/status"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Status user={dane} />
            </div>}
        />
      }

      {user && userRole === "Student" &&
        <Route
          path="/profile/zgłoszenie"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Message user={dane} />
            </div>}
        />
      }
      {user && userRole === "Student" &&
        <Route
          path="/profile/zgłoszenie/odpowiedzi"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Odpowiedzi />
            </div>}
        />
      }
      {user && userRole === "Student" &&
        <Route
          path="/profile/zgłoszenie/odpowiedzi/:issueId"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Odpowiedź />
            </div>
          } />
      }
      {user && userRole === "Student" &&
        <Route
          path="/profile/wymeldowanie"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <CheckOut user={dane} />
            </div>}
        />
      }

      {user && userRole === "Student" &&
        <Route
          path="/profile/pokój"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Room user={dane} />
            </div>}
        />
      }


      {user && userRole === "Student" &&
        <Route
          path="/profile/płatności"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <Payment user={dane} />
            </div>}
        />
      }

      {user && <Route
        path="/"
        element={
          <div>
            <Navbar setDane={handleSetDane} />
            <Homepage />
            <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
            <Part />
            <Footer />
          </div>
        } />
      }
      {user && userRole === "Student" &&
        <Route
          path="/profile/preference/edit"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <PreferenceEdit user={dane} />
            </div>
          } />
      }

      {user && userRole === "Opiekun" &&
        <Route
          path="/portiernia"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Opiekun setDane={handleSetDane} user={dane} />
              <ThemeProvider theme={theme}>
              <ChatBot
                headerTitle="GeekBot"
                steps={steps}
                {...config}
              />
              </ThemeProvider>
              <OpiekunInfo user={dane} />
            </div>
          } />
      }

      {user && userRole === "Opiekun" &&
        <Route
          path="/portiernia/studenci"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Opiekun setDane={handleSetDane} user={dane} />
              <OpiekunStudenci />
            </div>
          } />
      }
      {user && userRole === "Opiekun" &&
        <Route
          path="/portiernia/pokoje"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Opiekun setDane={handleSetDane} user={dane} />
              <OpiekunRooms />
            </div>
          } />
      }
      {user && userRole === "Opiekun" &&
        <Route
          path="/portiernia/wymeldowania"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Opiekun setDane={handleSetDane} user={dane} />
              <OpiekunCheckOut />
            </div>
          } />
      }
      {user && userRole === "Opiekun" &&
        <Route
          path="/portiernia/zgłoszenia"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Opiekun setDane={handleSetDane} user={dane} />
              <OpiekunZgloszenia />
            </div>
          } />
      }
      {user && userRole === "Opiekun" &&
        <Route
          path="/portiernia/zgłoszenia/:issueId"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Opiekun setDane={handleSetDane} user={dane} />
              <ZgloszeniaDetails />
            </div>
          } />
      }

      {user && userRole === "Kierownik" &&
        <Route
          path="/kierownik"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Kierownik setDane={handleSetDane} user={dane} />
              <KierownikInfo user={dane} />
            </div>
          } />
      }
      {user && userRole === "Kierownik" &&
        <Route
          path="/kierownik/wnioski"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Kierownik setDane={handleSetDane} user={dane} />
              <KierownikApplications />
            </div>
          } />
      }
      {user && userRole === "Kierownik" &&
        <Route
          path="/details/:studentId"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Kierownik setDane={handleSetDane} user={dane} />
              <StudentDetails />
            </div>
          } />
      }

      {user && userRole === "Kierownik" &&
        <Route
          path="/kierownik/studenci"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Kierownik setDane={handleSetDane} user={dane} />
              <KierownikStudenci />
            </div>
          } />
      }

      {user && userRole === "Kierownik" &&
        <Route
          path="/kierownik/pokoje"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Kierownik setDane={handleSetDane} user={dane} />
              <KierownikRooms />
            </div>
          } />
      }

      <Route path="/" element={<div>
        <Navbar />
        <Homepage />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/akademiki" element={<div>
        <Navbar />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Akademiki />
        <Part />
        <Footer />
      </div>} />

      <Route path="/404" element={<div>
        <Navbar />
        <Error404 />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>} />

      <Route path="/DS2/Korytarz" element={<div>
        <Navbar />
        <DS2Korytarz />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS2/Kuchnia" element={<div>
        <Navbar />
        <DS2Kuchnia />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS2/Pokój" element={<div>
        <Navbar />
        <DS2Pokoj />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS3/Korytarz" element={<div>
        <Navbar />
        <DS3Korytarz />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS3/Kuchnia" element={<div>
        <Navbar />
        <DS3Kuchnia />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS3/Pokój" element={<div>
        <Navbar />
        <DS3Pokoj />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS4/Korytarz" element={<div>
        <Navbar />
        <DS4Korytarz />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS4/Kuchnia" element={<div>
        <Navbar />
        <DS4Kuchnia />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS4/Pokój" element={<div>
        <Navbar />
        <DS4Pokoj />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Part />
        <Footer />
      </div>} />

      <Route path="/Cennik" element={<div>
        <Navbar />
        <Price />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Footer />
      </div>} />

      <Route path="/Dokumenty" element={<div>
        <Navbar />
        <Dokumenty />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Footer />
      </div>} />

      <Route path="/Kontakt" element={<div>
        <Navbar />
        <Kontakt />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Footer />
      </div>} />

      <Route path="/login" element={<div>
        <Navbar />
        <Login />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Footer />
      </div>} />

      <Route path="/form" element={<div>
        <Navbar />
        <Form />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
        <Footer />
      </div>} />

      <Route path="/form" element={<Form />} />
      <Route path="/profile" element={<Navigate replace to="/" />} />
      <Route path="/profile/preferences" element={<Navigate replace to="/" />} />
      <Route path="/profile/preferences/edit" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
