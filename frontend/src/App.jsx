import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
