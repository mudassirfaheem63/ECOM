import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import PublicLayout from "./components/public/Layout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import HowToUse from "./pages/HowToUse"
import Testimonial from "./pages/testimonal"
import Feature from "./pages/feature"
import Blog from "./pages/blog"
import Error404 from "./pages/404"
import Product from "./pages/product"
import Login from "./pages/Login"
import Registar from "./pages/Registar"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="howtouse" element={<HowToUse />} />
            <Route path="testimonal" element={<Testimonial />} />
            <Route path="feature" element={<Feature />} />
            <Route path="blog" element={<Blog />} />
            <Route path="404" element={<Error404 />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registar />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
