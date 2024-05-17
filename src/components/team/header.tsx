import Image from "next/image";

const TeamHeader = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-5 md:mx-10 items-start lg:items-end py-20 border-t-[1px] border-black mt-10">
      <span className="absolute top-14">(TEAM)</span>
      <Image
        src={"/team-header.svg"}
        width={100}
        height={100}
        alt="spin svg"
        className="mt-14 lg:mt-0 w-24 h-24"
      />
      <div className="w-full lg:w-[50%] lg:ml-32 space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          MEAT OUR TALENTED TEAM
        </h1>
        <p className="text-xl leading-6">
          &nbsp;&nbsp; &nbsp; &nbsp; Our team is passionate about staying on top
          of the latest trends and technologies, ensuring that your projects are
          always at the forefront of innovation. We value open communication,
          keeping you involved every step of the way. Your satisfaction is our
          priority, and we're dedicated to delivering exceptional results that
          exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default TeamHeader;
