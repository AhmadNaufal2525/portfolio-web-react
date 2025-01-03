import HomeRoute from "./routes/homeRoute";
import AboutRoute from "./routes/aboutMeRoute";
import PortfolioRoute from "./routes/portfolioRoute";
import ContactRoute from "./routes/contactRoute";
import NotFound from "./routes/notfoundRoute";
import Navbar from "./components/navbar";
import {
  BrowserRouter as Router,
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
    <Router>
      <App />
    </Router>
  );
}

export default Root;
