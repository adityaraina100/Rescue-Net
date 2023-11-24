import { logo } from "../assets/images";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-10 font-bold">
      <div className="text-white  h-[86px] w-full header-bg flex items-center justify-between px-10 rounded-full">
        <img
          src={logo}
          alt=""
          className="h-[50px]"
          onClick={() => {
            navigate("/");
          }}
        />

        <ul className="flex items-center gap-4">
          <li className="selected">Home</li>
          <li>About Us</li>
          <li>Agencies</li>
        </ul>
        <ul className=" flex gap-4 items-center ">
          <li>Sign Up</li>
          <li className="loginBtn rounded-3xl px-4 py-2 text-black font-semibold">
            Login
          </li>
        </ul>
      </div>
      ;
    </div>
  );
};

export default Header;
