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
import Register from "./pages/Register"
import DashboardLayout from './components/dashboard/Layout';
import ProductsManagement from './pages/Management/ProductsMnanagement'
import CategoriesManagement from './pages/Management/CategoriesManagement'
import OrdersManagement from './pages/Management/OrdersManagement'
import UsersManagement from './pages/Management/UsersManagement'
import ContactsManagement from './pages/Management/ContactsManagement'
import FAQsManagement from './pages/Management/FAQsManagement'
import ProtectedRoute from './Protectedroutes';

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
            <Route path="*" element={<Error404 />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/" element={<DashboardLayout />} >
            <ProtectedRoute requireAdmin>
            <Route path="dashboard/*" element={<div>Dashboard Home</div>} />
            <Route path="managementcategories" element={<CategoriesManagement />} />
            <Route path="managementproducts" element={<ProductsManagement />} />
            <Route path="managementorders" element={<OrdersManagement />} />
            <Route path="managementusers" element={<UsersManagement />} />
            <Route path="managementcontact" element={<ContactsManagement />} />
            <Route path="managementfaq" element={<FAQsManagement />} />
            </ProtectedRoute>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
