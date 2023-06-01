import CardFlip from "@/components/CardFlip";
import useCards from "@/hooks/useCards";

import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";

interface FlashcardsProps {
  onPage?: boolean;
}

const Flashcards: React.FC<FlashcardsProps> = ({ onPage }) => {
  const router = useRouter();
  const { setId } = router.query;
  const { data: cards = [], isLoading } = useCards(setId as string);
  const [card, setCard] = useState(0);

  return (
    <div className="flex flex-col gap-2" style={{ perspective: "1000px" }}>
      {!onPage && (
        <div className="flex flex-row items-center gap-5 mt-12">
          <div
            className="bg-neutral-100 rounded-full p-3 cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <FaChevronLeft size={20} />
          </div>
        </div>
      )}
      <CardFlip term={cards[card]?.term} definition={cards[card]?.definition} />

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
            active:bg-gray-800
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
            active:bg-gray-800
            disabled:opacity-40
            disabled:cursor-default
            disabled:bg-transparent
            "
        >
          <AiOutlineArrowRight size={30} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
