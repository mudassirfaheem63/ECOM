import { Outlet } from 'react-router-dom';
import useInjectedAssets from '../../hooks/useInjectedAssets';
import Header from './Header';
import Footer from './Footer';

const PublicLayout = () => {
  // Only these files load for Public pages
  useInjectedAssets([
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Poppins:wght@200;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css',
    '/Hairnic/lib/animate/animate.min.css',
    '/Hairnic/lib/owlcarousel/assets/owl.carousel.min.css',
    '/Hairnic/css/bootstrap.min.css',
    '/Hairnic/css/style.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
    '/Hairnic/lib/wow/wow.min.js',
    '/Hairnic/lib/easing/easing.min.js',
    '/Hairnic/lib/waypoints/waypoints.min.js',
    '/Hairnic/lib/owlcarousel/owl.carousel.min.js',
    '/Hairnic/js/main.js'
  ]);

  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>
  );
};

export default PublicLayout;
