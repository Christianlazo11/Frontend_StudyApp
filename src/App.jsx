import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PanelUser from "./pages/PanelUser";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes path="/">
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* Private routes */}
        <Route path="/paneluser" element={<PanelUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
