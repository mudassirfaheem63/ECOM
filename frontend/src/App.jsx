import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import HowToUse from "./pages/HowToUse"
import Testimonial from "./pages/testimonal"
import Feature from "./pages/feature"
import Blog from "./pages/blog"
import Error404 from "./pages/404"
import Product from "./pages/product"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/howtouse" element= {< HowToUse/>}/>
        <Route path="/testimonal" element= {< Testimonial/>}/>
        <Route path="/feature" element= {< Feature/>}/>
        <Route path="/blog" element= {< Blog/>}/>
        <Route path="/404" element={<Error404 />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
