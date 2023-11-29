import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";
const Layout = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
