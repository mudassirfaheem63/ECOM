import { Outlet } from "react-router-dom"
import  useInjectedAssets from "../../hooks/useInjectedAssets";    
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"


function DashboardLayout() {
    useInjectedAssets  ([
        'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css',
        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css',
        '/dashmin/lib/owlcarousel/assets/owl.carousel.min.css',
        '/dashmin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css',
        '/dashmin/css/bootstrap.min.css',
        '/dashmin/css/style.css',
        'https://code.jquery.com/jquery-3.4.1.min.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
        '/dashmin/lib/chart/chart.min.js',
        '/dashmin/lib/easing/easing.min.js',
        '/dashmin/lib/waypoints/waypoints.min.js',
        '/dashmin/lib/owlcarousel/owl.carousel.min.js',
        '/dashmin/lib/tempusdominus/js/moment.min.js',
        '/dashmin/lib/tempusdominus/js/moment-timezone.min.js',
        '/dashmin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js',
        '/dashmin/js/main.js'
    ]);
    return (<>
        <style>{`
            /* Add these styles to your css/style.css file */

            /* Make the content area a flex container */
            .content {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                width: 100%;
            }

            /* Create a wrapper for all content except footer */
            .content-wrapper {
                flex: 1 0 auto;
            }

            /* Footer styles */
            .footer {
                flex-shrink: 0;
                margin-top: auto;
            }
        `}</style>
        <div className="container-xxl position-relative bg-white d-flex p-0">

            <Sidebar />
            {/* Content Start */}
            <div className="content">
                <Header />
                <div className="content-wrapper">
              <Outlet/>
                </div>
                <Footer />
            </div>
            {/* Content End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </div>

    </>
    )
}

export default DashboardLayout