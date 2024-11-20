import CompanyOverview from "../components/CompanyOverview";
import OurMission from "../components/OurMission";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import Team from "../components/Team";

function About() {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-28 m-14 p-5 items-start">
      <div className="p-10 space-y-32 grid justify-center items-center max-w-3xl border border-[rgb(33,33,33)] rounded-lg hover:border-purple-900 hover:bg-slate-900 flex-col h-full">
        <CompanyOverview />
        <OurMission />
        <WhatWeDo />
        <WhyChooseUs />
      </div>
      <div className=" border border-[rgb(33,33,33)] hover:border-purple-900 hover:bg-slate-900 rounded-lg h-auto flex">
        <Team />
      </div>
    </div>
  );
}

export default About;
