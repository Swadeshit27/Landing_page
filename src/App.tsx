import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}