import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row h-16 bg-slate-400 items-center justify-between px-10">
      <p className="text-4xl  text-sky-700 font-semibold">Quizlang</p>
      <div className="flex flex-row items-center ">
        <div
          className="bg-sky-900 rounded-full p-2 cursor-pointer"
          onClick={() => router.push(`set/create-set`)}
        >
          <AiOutlinePlus size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
