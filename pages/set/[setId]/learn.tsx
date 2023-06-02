import ButtonLearn from "@/components/ButtonLearn";
import axios from "axios";
import useCards from "@/hooks/useCards";

import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useCallback, useEffect } from "react";

const Learn = () => {
  const router = useRouter();
  const { setId } = router.query;
  const { data: cards, isLoading } = useCards(setId as string);

  const [card, setCard] = useState(0);
  const [isClicked, setClicked] = useState(false);
  const [correctStatus, setCorrectStatus] = useState(0);
  const [chosen, setChosen] = useState("");

  const [questions, setQuestions] = useState(
    cards?.filter((item: any) => item.level !== 2).splice(0, 4)
  );
  const [answers, setAnswers] = useState(
    cards?.filter((item: any) => item.level !== 2).splice(0, 4)
  );

  console.log(questions);

  useEffect(() => {
    setQuestions(cards?.filter((item: any) => item.level !== 2).splice(0, 4));
    setAnswers(cards?.filter((item: any) => item.level !== 2).splice(0, 4));
  }, [cards]);

  const handleClick = useCallback(
    (e: any) => {
      if (questions.length - 1 > card) {
        if (questions[card].definition === e.target.value) {
          setCorrectStatus(1);
        } else {
          setCorrectStatus(2);
          setQuestions([...questions, { ...questions[card], isFalse: true }]);
        }
      }
      setChosen(e.target.value);
      setClicked(true);
    },
    [card, questions]
  );

  const handleSubmit = useCallback(() => {
    if (card < questions?.length - 1) {
      setCard(card + 1);
    } else {
      answers.map(async (answer: any) => {
        await axios.post("/api/card/edit", { card: answer });
      });
      router.back();
    }
    setClicked(false);
    setCorrectStatus(0);
    setChosen("");
  }, [card]);

  if (isLoading) {
    return <div className="text-white text-4xl"></div>;
  }

  if (questions?.length === 0) {
    return <div>Bitti</div>;
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
          <div className="flex flex-row gap-10 items-center py-8">
            <p className="text-neutral-400 font-bold  text-sm">Tanım</p>
            {questions && questions[card]?.isFalse && (
              <p className="text-white font-bold  text-xs bg-[#d0570052] p-1 rounded-full">
                Tekrar deneyin
              </p>
            )}
          </div>

          <p className="text-white text-xl font-semibold py-3">
            {questions && questions[card].term}
          </p>

          {correctStatus === 0 && (
            <p className="text-white font-semibold mt-28">Doğru terimi seç</p>
          )}
          {correctStatus === 1 && (
            <p className="text-[#18ae79] font-semibold mt-28">
              İyi iş çıkardın!
            </p>
          )}
          {correctStatus === 2 && (
            <p className="text-red-400 font-semibold mt-28">
              Sorun değil. Öğrenmeye devam ettiğini unutma!
            </p>
          )}
          <div className="grid grid-cols-2 gap-5 py-5">
            {answers?.map((answer: any, key: any) => (
              <ButtonLearn
                key={key}
                index={key + 1}
                answer={answer.definition}
                onClick={handleClick}
                disabled={isClicked}
                correct={questions[card].definition}
                chosen={chosen}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`
          ${isClicked ? "block" : ""}
          ${isClicked ? "scale-x-100" : "scale-y-0"}
          fixed
          w-full
          bottom-0
          mx-auto
          bg-indigo-950
          mt-16
          py-3
          rounded-sm
          transition
          `}
      >
        <div className="flex flex-row justify-center items-center xl:justify-evenly w-full px-5">
          <p className="text-white hidden xl:block opacity-50 font-semibold">
            Devam etmek için herhangi bir tuşa basın
          </p>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 rounded-lg py-3 px-5 w-3/4 xl:w-auto hover:bg-blue-800 active:bg-blue-950 shadow-xl"
          >
            <p className="text-white font-bold">Devam et</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Learn;
