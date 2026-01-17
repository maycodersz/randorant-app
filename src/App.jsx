import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home"
import CreateRoom from "./routes/create-room"
import JoinRoom from "./routes/join-room"
import Room from "./routes/room"
import NavBar from "./components/nav-bar"
import Footer from "./components/footer"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/randorant-app" element={<Home />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room" element={<Room />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}