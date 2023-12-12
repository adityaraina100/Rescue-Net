import { AgenciesImg1, AgenciesImg2, AgenciesImg3 } from "../assets/images";

const Agencies = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Section 1 */}
      <div className="flex w-full p-20 items-center group gap-5 lightShade">
        <div className="w-2/4 text-white py-10 px-5 ">
          <h1 className="text-5xl rescueNet leading-tight">
            Agencies-Uniting
            <br /> Strength for Swift <br />
            and Compassionate Rescue{" "}
          </h1>
          <p className="text-base text-slate-400 mt-4">
            Dedicated to safeguarding communities, our rescue agencies are the
            front line heroes committed to swift and effective emergency
            response. With specialized training and unwavering courage, they
            stand ready to protect and serve, ensuring the safety and well-being
            of those in distress. Harnessing expertise and compassion, our
            rescue agencies exemplify resilience in the face of adversity.
          </p>
        </div>
        <div className="w-2/4 relative overflow-hidden">
          <img
            src={AgenciesImg1}
            alt=""
            className=" group-hover:scale-110 duration-1000"
          />
        </div>
      </div>

      <div className="p-20 text-white">
        <div className="flex items-start flex-col">
          <h1 className="text-5xl mb-10 rescueNet">Mission & Vision</h1>
          <p className="sm w-[1296px] text-slate-400 flex-wrap">
            To respond with unwavering dedication and expertise in emergencies,
            safeguarding lives and communities. Vision: Building a resilient and
            united world, where swift and compassionate rescue efforts bring
            hope and relief to those in crisis
          </p>
        </div>
        <div className="grid gap-10 grid-cols-2 h-full w-full px-10 mt-14 group items-center">
          <div className="overflow-hidden">
            <img
              src={AgenciesImg2}
              alt=""
              className=" group-hover:scale-110 duration-1000"
            />
          </div>
          <div className="flex flex-col gap-4  text-slate-400 pl-2 ">
            <h2 className="text-3xl rescueNet">Mission</h2>
            <p>
              Our mission is a commitment to excellence in emergency response,
              where every action is driven by dedication and expertise. We aim
              to protect lives and communities, ensuring swift and effective aid
              in times of crisis. With a focus on preparedness and compassion,
              our mission is to be the beacon of hope for those facing
              adversity, fostering resilience and safety in every response.
            </p>
          </div>
        </div>
        <div className="grid gap-10 grid-cols-2 h-full w-full px-10 mt-14 group items-center">
          <div className="flex flex-col gap-4  text-slate-400 pl-2 ">
            <h2 className="text-3xl rescueNet ">Vision</h2>
            <p>
              Envisioning a world where communities stand united against
              adversity, our vision is to be the catalyst for positive change.
              We strive to create a future where our relentless commitment to
              excellence in emergency response builds resilience, fosters
              compassion, and brings about a global network of safety and
              support.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={AgenciesImg3}
              alt=""
              className=" group-hover:scale-110 duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
