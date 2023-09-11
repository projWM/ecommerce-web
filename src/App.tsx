import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponents from "./components/navbar/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
import HomePage from "./pages/home/HomePage";
import FAQPage from "./pages/FAQPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import ProductPage from "./pages/categories/ProductPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import AuthSlider from "./pages/auth/AuthSliderPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <div>
      <NavbarComponents />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/categories" Component={CategoriesPage} />
        <Route path="/prdouct" Component={ProductPage} />
        <Route path="/termcon" Component={TermsAndConditionPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/signin" Component={SignInPage} />
        <Route path="/signup" Component={SignUpPage} />
        <Route path="/authslider" Component={AuthSlider} />
        <Route path="/forgotpassword" Component={ForgotPasswordPage} />
      </Routes>

      <FooterComponents />
    </div>
  );
}

export default App;
