import CardFlip from "@/components/CardFlip";
import useCards from "@/hooks/useCards";
import useSet from "@/hooks/useSet";

import { useState } from "react";
import { useRouter } from "next/router";
import {
  AiFillStar,
  AiOutlineSound,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";

const SetScreen = () => {
  const router = useRouter();
  const { setId } = router.query;

  const { data: set = {} } = useSet(setId as string);
  const { data: cards = [] } = useCards(setId as string);
  const [card, setCard] = useState(0);

  return (
    <div className="container mx-auto px-4 sm:px-18 lg:px-48">
      <div className="flex flex-row items-center gap-5 mt-12">
        <div
          className="bg-neutral-100 rounded-full p-3 cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <FaChevronLeft size={20} />
        </div>
        <p className="text-white font-bold text-3xl">{set.name}</p>
      </div>

      <div className="flex flex-col gap-2" style={{ perspective: "1000px" }}>
        <CardFlip
          term={cards[card]?.term}
          definition={cards[card]?.definition}
        />

        {/* Buttons */}
        <div className="flex flex-row gap-3 items-center justify-center py-3">
          <button
            disabled={card === 0}
            onClick={() => setCard(card - 1)}
            className="
            p-2 
            border-neutral-50 
            border-[1px] 
            rounded-full 
            cursor-pointer 
            shadow-xl
            hover:bg-gray-600
            disabled:opacity-40
            disabled:cursor-default
            disabled:bg-transparent
            "
          >
            <AiOutlineArrowLeft size={30} color="white" />
          </button>

          <p className="text-white font-semibold px-2">
            {card + 1} / {cards.length}
          </p>
          <button
            disabled={card === cards.length - 1}
            onClick={() => setCard(card + 1)}
            className="
            p-2 
            border-neutral-50 
            border-[1px] 
            rounded-full 
            cursor-pointer 
            shadow-xl
            hover:bg-gray-600
            disabled:opacity-40
            disabled:cursor-default
            disabled:bg-transparent
            "
          >
            <AiOutlineArrowRight size={30} color="white" />
          </button>
        </div>
      </div>

      <div className="py-5 flex flex-col items-center gap-3">
        <p className="text-white font-bold text-lg py-9 w-full">
          Bu setteki terimler ({cards.length})
        </p>
        <div className="flex flex-col gap-3 w-full">
          {cards.map((card: any, index: any) => (
            <div
              key={index}
              className="
                bg-slate-600
                flex
                flex-row
                items-center
                px-5
                py-4
                rounded-md
            "
            >
              <div className="flex flex-row w-3/4 gap-5 px-3">
                <p className="text-gray-100 w-56 border-r-[2px] border-neutral-900">
                  {card.term}
                </p>
                <p className="text-gray-100 w-56">{card.definition}</p>
              </div>

              <div className="flex flex-row items-center justify-end gap-3 sm:gap-6 w-1/4">
                <AiFillStar color="white" size={24} />
                <AiOutlineSound color="white" size={24} />
                <BsPencil color="white" size={20} />
              </div>
            </div>
          ))}
        </div>

        <button
          className="
            mt-5
            px-8
            py-5
            text-white
            bg-blue-600
            border-[1px]
            border-transparent
            font-semibold
            rounded-md
            hover:bg-blue-900 
            focus:bg-blue-950
            focus:border-gray-50
            transition
        "
        >
          Terim ekle veya sil
        </button>
      </div>
    </div>
  );
};

export default SetScreen;
