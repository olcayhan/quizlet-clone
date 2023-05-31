import ButtonLearn from "@/components/ButtonLearn";

import useCards from "@/hooks/useCards";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useCallback } from "react";

const Learn = () => {
  const router = useRouter();
  const { setId } = router.query;
  const { data: cards } = useCards(setId as string);
  const [card, setCard] = useState(0);

  let questions = cards?.filter((item: any) => item.level !== 2);
  questions = questions?.splice(0, 4);
  let answers = questions
    ?.map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map(({ value }) => value);

  let falseWords = [];

  const handleClick = useCallback(
    (e: any) => {
      console.log(e.target.value);
      if (questions[card].definition === e.target.value) {
        e.target.style.backgroundColor = "#18ae79";
        e.target.style.border = "1px solid white";
      } else {
        // e.target.style.backgroundColor = "#18ae79";
        e.target.style.border = "1px solid red";
      }
    },
    [card, questions]
  );

  if (!cards) {
    return <div className="text-white text-4xl">Loading</div>;
  }

  return (
    <>
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

          <p className="text-white text-xl font-semibold py-3">
            {questions[card].term}
          </p>

          <p className="text-white font-semibold mt-28">Doğru terimi seç</p>
          <div className="grid grid-cols-2 gap-5 py-5">
            {answers?.map((answer: any, key: any) => (
              <ButtonLearn
                key={key}
                index={key + 1}
                answer={answer.definition}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="
          fixed
          w-full
          bottom-0
          mx-auto
          bg-indigo-950
          mt-16
          py-3
          rounded-sm
          "
      >
        <div className="flex flex-row justify-center items-center xl:justify-evenly w-full px-5">
          <p className="text-white hidden xl:block opacity-50 font-semibold">
            Devam etmek için herhangi bir tuşa basın
          </p>
          <button className="bg-blue-700 rounded-lg py-3 px-5 w-3/4 xl:w-auto hover:bg-blue-800 active:bg-blue-950 shadow-xl">
            <p className="text-white font-bold">Devam et</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Learn;
