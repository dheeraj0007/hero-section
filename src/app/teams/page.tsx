import { Reveal } from "@/components/reveal";
import TeamCard from "@/components/team/card";
import TeamHeader from "@/components/team/header";

const team = [
  {
    src: "/team1.jpg",
    name: "Jane Doe",
    post: "CEO",
  },
  {
    src: "/team2.jpg",
    name: "Jane Doe",
    post: "CEO",
  },
  {
    src: "/team3.jpg",
    name: "Jane Doe",
    post: "CEO",
  },
];

const Page = () => {
  return (
    <div>
      <TeamHeader />

      {/* cards wrapper */}
      <Reveal width="100%">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 md:mx-10">
          {team.map((item, index) => (
            <TeamCard key={index} {...item} />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Page;
