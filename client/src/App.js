import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Information from "./components/Main/Information"
import React, { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import Profile from "./components/Profile"
import Info from "./components/Profile/Info";
import Preference from "./components/Profile/Preference";
import PreferenceEdit from "./components/Profile/PreferenceEdit";
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
              <Main setDane={handleSetDane} />
              <Profile setDane={handleSetDane} />
              <Info user={dane} />
            </div>}
        />
      }
      {user &&
        <Route
          path="/profile/preference"
          element={
            <div>
              <Main />
              <Profile setDane={handleSetDane} />
              <Preference user={dane} />
            </div>}
        />
      }
      {user && <Route
        path="/"
        element={
          <div>
            <Main setDane={handleSetDane} />
            <Information />
          </div>
        } />
      }
      {user &&
        <Route
          path="/profile/preference/edit"
          element={
            <div>
              <Main setDane={handleSetDane}/>
              <PreferenceEdit user={dane} />
             </div>
          } />
      }
      <Route path="/form" element={<Form />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<div>
        <Main />
        <Information />
      </div>} />
      <Route path="/profile" element={<Navigate replace to="/" />} />
      <Route path="/profile/preferences" element={<Navigate replace to="/" />} />
      <Route path="/profile/preferences/edit" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
