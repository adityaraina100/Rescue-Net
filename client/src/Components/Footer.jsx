import { Link } from "react-router-dom";
import {
  Buttons_Container,
  locationIcon,
  mailIcon,
  phoneIcon,
} from "../assets/images";

const Footer = () => {
  return (
    <div className=" w-full min-h-80 lightShade py-10  text-white">
      <div className="flex flex-col items-center gap-3">
        <h3 className="rescueNet text-2xl">Rescue Net</h3>
        <ul className="flex items-center gap-4">
          <li className="hover:text-lime-300 hover:scale-110 duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-lime-300 hover:scale-110 duration-300">
            <Link to={"https://github.com/adityaraina100/Rescue-Net"}>
              About Us
            </Link>
          </li>
          <li className="hover:text-lime-300 hover:scale-110 duration-300">
            <Link to={"/agencies"}>Agencies</Link>
          </li>
        </ul>
      </div>
      <div className="mt-10 border-y-[1px]  p-10  flex justify-center gap-6">
        <div className="flex gap-1">
          <img src={mailIcon} alt="" />
          <span>assemble@rescuenet.com</span>
        </div>
        <div className="flex gap-1">
          <img src={phoneIcon} alt="" />
          <span>+91 69696-96969</span>
        </div>
        <div className="flex gap-1">
          <img src={locationIcon} alt="" />
          <span>Somewhere in the World</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 px-10">
        <img src={Buttons_Container} alt="" />
        <span>&copy; RescueNet</span>
        <span>Privacy Policy | Terms of Service</span>
      </div>
    </div>
  );
};

export default Footer;
