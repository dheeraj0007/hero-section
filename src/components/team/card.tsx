import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  src: string;
  name: string;
  post: string;
}

const TeamCard = ({ src, name, post }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="relative top-10 left-5 ">
        <span className="text-black bg-white rounded-full px-2 py-1">
          <Link href={"https://www.linkedin.com"}>LinkedIn</Link>
        </span>
        <span className="text-black bg-white rounded-full px-2 py-1 ml-1">
          <Link href={"https://www.linkedin.com"}>Instagram </Link>
        </span>
      </div>
      <Image
        src={src}
        width={1080}
        height={720}
        alt="team"
        className="w-[100%]"
      />
      <h1 className="text-2xl md:text-3xl font-semibold mt-10">{name}</h1>
      <p className="text-base md:text-xl text-gray-400">{post}</p>
    </div>
  );
};

export default TeamCard;
