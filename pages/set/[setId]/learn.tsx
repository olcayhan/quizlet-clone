import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

const Learn = () => {
  const router = useRouter();
  const { setId } = router.query;
  return (
    <div className="container mx-auto px-4 sm:px-18 lg:px-48">
      <div className="flex flex-row justify-end items-center py-8">
        <button
          onClick={() => router.back()}
          className="
            border-[1px] 
            p-2 
            rounded-lg
            hover:bg-gray-700
            active:bg-gray-800
        "
        >
          <AiOutlineClose size={20} color="white" />
        </button>
      </div>
      <div className="flex flex-col gap-3 bg-blue-950 mt-6 shadow-xl rounded-lg px-8">
        <p className="text-neutral-400 font-bold py-8 text-sm">Tanım</p>
        <p className="text-white text-xl font-semibold py-3">başlık</p>

        <p className="text-white font-semibold mt-28">Doğru terimi seç</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-5">
          <button
            className="
            flex 
            flex-row 
            items-center 
            text-white
            gap-6  
            border-[1px]
            border-gray-600
            rounded-lg
            p-4
            hover:border-neutral-200
            "
          >
            <p className="text-white font-semibold">1</p>
            <p className="text-white font-semibold">extent</p>
          </button>
          <button
            className="
            flex 
            flex-row 
            items-center 
            text-white
            gap-6  
            border-[1px]
            border-gray-600
            rounded-lg
            p-4
            hover:border-neutral-200
            "
          >
            <p className="text-white font-semibold">1</p>
            <p className="text-white font-semibold">extent</p>
          </button>
          <button
            className="
            flex 
            flex-row 
            items-center 
            text-white
            gap-6  
            border-[1px]
            border-gray-600
            rounded-lg
            p-4
            hover:border-neutral-200
            "
          >
            <p className="text-white font-semibold">1</p>
            <p className="text-white font-semibold">extent</p>
          </button>
          <button
            className="
            flex 
            flex-row 
            items-center 
            text-white
            gap-6  
            border-[1px]
            border-gray-600
            rounded-lg
            p-4
            hover:border-neutral-200
            "
          >
            <p className="text-white font-semibold">1</p>
            <p className="text-white font-semibold">extent</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
