import {
  AbstractDesign,
  Map,
  gMaps,
  heroImg,
  heroImg2,
} from "../assets/images";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Section 1 */}
      <div className="flex w-full p-20 items-center group gap-5 welCome">
        <div className="w-2/4 text-white py-10 px-5 ">
          <h1 className="text-6xl">
            Welcome to <br /> <span className="rescueNet"> RescueNet </span>
          </h1>
          <p className="text-base text-slate-400 mt-4">
            Welcome to our state-of-the-art centralized web app designed for
            rescue scenarios. This platform seamlessly integrates intuitive
            design with powerful functionality, revolutionizing the way rescue
            missions are coordinated and executed. Experience swift response
            coordination and empower your team with a user-friendly interface,
            ensuring precision and efficiency in every life-saving operation.
          </p>
        </div>
        <div className="w-2/4 relative overflow-hidden">
          <img
            src={heroImg}
            alt=""
            className="w-full  object-cover  relative z-10 group-hover:scale-110 duration-1000"
          />
          <img
            src={AbstractDesign}
            alt=""
            className="absolute top-10 right-1 -z-10"
          />
        </div>
      </div>

      <div className="p-20 text-white">
        <div className="flex items-start flex-col">
          <h1 className="text-5xl mb-10">
            Our <span className="rescueNet"> Values</span>
          </h1>
          <p className="w-[1296px] text-slate-400">
            At our core, we champion the intrinsic value of seamless efficiency
            and precision in rescue operations. Through user-concentric design
            and robust functionality, we elevate the standard of care, embodying
            the very essence of value in every life-saving mission
          </p>
        </div>
        <div className="grid gap-10 grid-cols-2 h-full w-full px-10 mt-14">
          <div className="flex flex-col gap-4  text-slate-400 valueItems pl-2 ">
            <h2 className="text-2xl ">Integrity</h2>
            <p>
              With unwavering integrity as our compass, we navigate the
              complexities of rescue missions, prioritizing transparency and
              reliability in every aspect of our web app&#39;s design and
              functionality.
            </p>
          </div>
          <div className="flex flex-col gap-4  text-slate-400 valueItems pl-2 ">
            <h2 className="text-2xl ">Collaboration</h2>
            <p>
              Fostering a culture of teamwork and open communication to enhance
              collective efficacy.
            </p>
          </div>
          <div className="flex flex-col gap-4  text-slate-400 valueItems pl-2 ">
            <h2 className="text-2xl ">Adaptability</h2>
            <p>
              Harnessing cutting-edge technology to adapt to the evolving
              landscape of rescue scenarios and provide agile solutions
            </p>
          </div>
          <div className="flex flex-col gap-4  text-slate-400 valueItems pl-2 ">
            <h2 className="text-2xl ">Integrity</h2>
            <p>
              Prioritizing an intuitive and user-friendly interface to empower
              rescue teams with tools that are easy to navigate and utilize in
              high-pressure situations.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full ">
        <div className="flex w-full p-20  justify-between gap-5 welCome group ">
          <div className="w-2/4 text-white py-10 px-5">
            <h1 className="text-6xl rescueNet">Agencies</h1>
            <p className="text-base text-slate-400 mt-6">
              Embrace the power of connectivity as our web app unites various
              rescue agencies nationwide on a single platform. From coast to
              coast, experience the synergy of collective efforts, ensuring a
              seamless exchange of information and coordination among agencies
              for effective and unified rescue operations.
            </p>
          </div>
          <div className="w-2/4  overflow-hidden ">
            <img
              src={heroImg2}
              alt=""
              className="w-full h-96   object-cover  group-hover:scale-110 duration-1000"
            />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full ">
        <div className="flex w-full p-20  justify-between gap-5  group ">
          <div className="w-2/4  overflow-hidden ">
            <a href={gMaps}>
              <img
                src={Map}
                alt=""
                className="w-full h-96   object-cover  group-hover:scale-110 duration-1000"
              />
            </a>
          </div>
          <div className="w-2/4 text-white py-10 px-5">
            <h1 className="text-6xl rescueNet">Interactive Mapping</h1>
            <p className="text-base text-slate-400 mt-6">
              Empower your rescue missions with our Interactive Mapping
              feature—seamlessly visualize and coordinate operations nationwide.
              Pinpoint agency locations, track real-time responses, and enhance
              decision-making with a dynamic, user-friendly map interface.
              Revolutionize the way you navigate rescue scenarios, fostering
              efficient collaboration and precision across the entire network.
            </p>
            <a href={gMaps}>
              <FaLongArrowAltLeft className="rescueNet text-6xl mt-10  animated" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
