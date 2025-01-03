import HomeRoute from "../src/pages/home";
import AboutRoute from "./pages/about";
import PortfolioRoute from "./pages/portfolio";
import ContactRoute from "./pages/contact";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  // List of valid routes
  const validRoutes = ["/", "/about", "/portfolio", "/contact"];

  // Check if the current path is valid
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar only for valid routes */}
      {isValidRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/portfolio" element={<PortfolioRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function Root() {
  return (
    <Router basename="/portfolio-web-react/">
      <App />
    </Router>
  );
}

export default Root;
