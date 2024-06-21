import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarRent from "./pages/CarRent";
import ScooterRent from "./pages/ScooterRent";
import Tour from "./pages/Tour";
import { Box, CssBaseline } from '@mui/material'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { grey } from "@mui/material/colors";

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Box sx={{ flex: '1 0 auto', bgcolor: grey[200] }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/car-rent" element={<CarRent />} />
            <Route path="/scooter-rent" element={<ScooterRent />} />
            <Route path="/tour" element={<Tour />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}
