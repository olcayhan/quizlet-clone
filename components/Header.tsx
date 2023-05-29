import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row h-16 bg-slate-400 items-center px-2">
      <p className="text-4xl w-3/4 text-sky-700 font-semibold">Quizlang</p>
      <div className="flex flex-row items-center w-1/4">
        <button
          onClick={() => {
            router.push(`set/create-set`);
          }}
          className="bg-sky-900 rounded-full w-10 h-10 text-4xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
