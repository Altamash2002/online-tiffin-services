import Header from "./components/header";
import AboutUs from "./pages/about";
import Chef from "./pages/chef";
import NavHome from "./pages/nav-home";
import Register from "./pages/register";
import Login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/footer";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsOfServices from "./pages/Terms";
import InsideLogin from "./pages/insideLogin";

const App = () => {
  return (
    <div> 
      <Header/>

      <Routes>
        <Route path="/" element={<NavHome />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="chef" element={<Chef />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-services" element={<TermsOfServices />} />
        <Route path="inside-login" element={<InsideLogin />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
