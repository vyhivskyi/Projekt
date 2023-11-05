import { Route, Routes, Navigate } from "react-router-dom";
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
import Preference from "./pages/Profile/Preference";
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

function App() {
  const user = localStorage.getItem("token");
  const [dane, setDane] = useState();
  const handleSetDane = (data) => {
    setDane(data);
  }
  return (
    <Routes>
      {user &&
        <Route
          path="/profile"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <Info user={dane} />
            </div>}
        />
      }

      {user &&
        <Route
          path="/profile/zgłoszenie"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane}  user={dane} />
              <Message user={dane} />
            </div>}
        />
      }

      {user &&
        <Route
          path="/profile/wymeldowanie"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane} user={dane} />
              <CheckOut user={dane} />
            </div>}
        />
      }

      {user &&
        <Route
          path="/profile/pokój"
          element={
            <div>
              <Navbar setDane={handleSetDane} />
              <Profile setDane={handleSetDane}  user={dane} />
              <Room user={dane} />
            </div>}
        />
      }

      {user &&
        <Route
          path="/profile/preference"
          element={
            <div>
              <Navbar setDane={handleSetDane}/>
              <Profile setDane={handleSetDane} user={dane} />
              <Preference user={dane} />
            </div>}
        />
      }
      {user && <Route
        path="/"
        element={
          <div>
            <Navbar setDane={handleSetDane} />
            <Homepage />
          </div>
        } />
      }
      {user &&
        <Route
          path="/profile/preference/edit"
          element={
            <div>
              <Navbar setDane={handleSetDane}/>
              <Profile setDane={handleSetDane} user={dane} />
              <PreferenceEdit user={dane} />
             </div>
          } />
      }

      <Route path="/" element={<div>
        <Navbar />
        <Homepage />
        <Part />
        <Footer />
      </div>} />

      <Route path="/akademiki" element={<div>
        <Navbar />
        <Akademiki />
        <Part />
        <Footer />
      </div>} />

      <Route path="/404" element={<div>
        <Navbar />
        <Error404 />
      </div>} />
      
      <Route path="/DS2/Korytarz" element={<div>
        <Navbar />
        <DS2Korytarz />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS2/Kuchnia" element={<div>
        <Navbar />
        <DS2Kuchnia />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS2/Pokój" element={<div>
        <Navbar />
        <DS2Pokoj />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS3/Korytarz" element={<div>
        <Navbar />
        <DS3Korytarz />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS3/Kuchnia" element={<div>
        <Navbar />
        <DS3Kuchnia />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS3/Pokój" element={<div>
        <Navbar />
        <DS3Pokoj />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS4/Korytarz" element={<div>
        <Navbar />
        <DS4Korytarz />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS4/Kuchnia" element={<div>
        <Navbar />
        <DS4Kuchnia />
        <Part />
        <Footer />
      </div>} />

      <Route path="/DS4/Pokój" element={<div>
        <Navbar />
        <DS4Pokoj />
        <Part />
        <Footer />
      </div>} />

      <Route path="/Cennik" element={<div>
        <Navbar />
        <Price />
        <Footer />
      </div>} />

      <Route path="/Dokumenty" element={<div>
        <Navbar />
        <Dokumenty />
        <Footer />
      </div>} />

      <Route path="/Kontakt" element={<div>
        <Navbar />
        <Kontakt />
        <Footer />
      </div>} />

      <Route path="/login" element={<div>
        <Navbar />
        <Login />
        <Footer />
      </div>} />

      <Route path="/form" element={<div>
        <Navbar />
        <Form />
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
