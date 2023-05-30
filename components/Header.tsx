import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
const Header = () => {
  const router = useRouter();
  return (
    <div
      className="
        flex 
        flex-row 
        h-16 
        bg-[#0a092d] 
        items-center 
        justify-between 
        px-10
        border-gray-600
        border-b-[1px]  
      "
    >
      <p className="text-4xl text-neutral-50 font-semibold">Quizlang</p>
      <div className="flex flex-row items-center gap-3">
        <button
          className="bg-sky-900 rounded-full p-2 hover:bg-sky-950"
          onClick={() => router.push(`set/create-set`)}
        >
          <AiOutlinePlus size={24} color="white" />
        </button>

        <button
          className="bg-sky-900 rounded-full p-2 hover:bg-sky-950"
          onClick={() => signOut()}
        >
          <BiLogOut size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Header;
