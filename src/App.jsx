import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Lessons from "./Pages/Lessons";
// import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/lessons" element={<Lessons />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
