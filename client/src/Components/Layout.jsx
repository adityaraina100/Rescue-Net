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
      <div className="rounded-full sticky  bottom-10 w-10  ml-10 mb-10 overflow-hidden hover:scale-125 duration-300">
        <img
          src="https://img.freepik.com/free-vector/illustration-speech-bubble_53876-5625.jpg?w=740&t=st=1702217923~exp=1702218523~hmac=d97d19054c5668dd17c07eb970242853e42e85a1d46c15c885bfbb50490d7b4d"
          alt=""
          className="object-cover"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
