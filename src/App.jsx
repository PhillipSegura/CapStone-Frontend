import { Routes, Route } from "react-router";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [user, setUser] = useState("any user");

  return (
    <>
      {user ? (
        <>
          <Nav />
          <div>Welcome{user} </div>
          <h1> DanceCircle</h1>;
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </>
  );
}

export default App;
