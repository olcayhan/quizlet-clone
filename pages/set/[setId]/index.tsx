import useCards from "@/hooks/useCards";
import useSet from "@/hooks/useSet";
import Button from "@/components/Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import Flashcards from "./flashcards";
import Spinner from "@/components/Spinner";

import { toast } from "react-hot-toast";
import { useCallback } from "react";
import { useRouter } from "next/router";
import {
  AiFillStar,
  AiOutlineSound,
  AiOutlineMergeCells,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FaChevronLeft, FaBrain, FaTrash } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { HiOutlineDocument } from "react-icons/hi";

const SetScreen = () => {
  const router = useRouter();
  const { setId } = router.query;
  const { data: currentUser } = useCurrentUser();
  const { data: set = {}, isLoading: setLoading } = useSet(setId as string);
  const { data: cards = [], isLoading: cardLoading } = useCards(
    setId as string
  );

  let level1 = cards.filter((item: any) => item.level === 0);
  let level2 = cards.filter((item: any) => item.level === 1);
  let level3 = cards.filter((item: any) => item.level === 2);

  const handleDelete = useCallback(async () => {
    try {
      await axios.post("/api/set/delete", { setId });
      toast.success("Set silindi");
    } catch (err) {
      toast.error("Birşeyler yanlış gitti");
    } finally {
      router.back();
    }
  }, [setId]);

  if (setLoading || cardLoading) {
    return <Spinner />;
  }

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

      <Flashcards onPage={true} />

      {/* Buttons */}
      <div className="flex flex-col justify-center py-3">
        <p className="text-white font-semibold text-lg">
          Tek başına çalışma aktivitesi
        </p>
        <div className="grid grid-cols-2 2xl:grid-cols-4 py-3 gap-3">
          <Button
            icon={TbCards}
            text="Kartlar"
            onClick={() => router.push(`/set/${setId}/flashcards`)}
          />
          <Button
            icon={FaBrain}
            text="Öğren"
            onClick={() => router.push(`/set/${setId}/learn`)}
          />
          <Button icon={HiOutlineDocument} text="Test" />
          <Button icon={AiOutlineMergeCells} text="Eşleştir" />
        </div>
      </div>

      {/* User Info */}
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-white p-6 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-white text-xs font-thin">Oluşturan:</p>
            <p className="text-white text-md font-bold">
              {currentUser?.username}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() => router.push(`/set/${setId}/edit`)}
            className="border-[1px] p-3 rounded-full hover:bg-gray-600 active:bg-gray-700"
          >
            <BsPencil color="white" size={18} />
          </button>
          <button
            onClick={handleDelete}
            className="border-[1px] p-3 rounded-full hover:bg-gray-600 active:bg-gray-700"
          >
            <FaTrash color="white" size={18} />
          </button>
        </div>
      </div>

      <p className="text-white">{set.desc}</p>

      <div className="py-5 flex flex-col items-center gap-3">
        <p className="text-white font-bold text-xl py-3 w-full">
          Bu setteki terimler ({cards.length})
        </p>
        <div className="flex flex-col gap-3 w-full">
          {level1.length !== 0 && (
            <div className="flex flex-row justify-between py-3">
              <div className="flex flex-col gap-2">
                <p className="text-blue-400 text-xl font-bold">
                  Çalışılmamış ({level1.length})
                </p>
                <p className="text-white">Bu terimleri henüz çalışmadınız.</p>
              </div>
            </div>
          )}
          {level1.map((card: any, key: any) => (
            <div
              key={key}
              className="
                bg-blue-950
                flex
                flex-row
                items-center
                px-5
                py-4
                rounded-md
                shadow-xl
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
          {level2.length !== 0 && (
            <div className="flex flex-row justify-between py-3">
              <div className="flex flex-col gap-2">
                <p className="text-orange-400 text-xl font-bold">
                  Öğrenmeye devam edilen setler ({level2.length})
                </p>
                <p className="text-white">
                  Bu terimleri öğrenmeye başladınız. Devam et!
                </p>
              </div>
            </div>
          )}
          {level2.map((card: any, index: any) => (
            <div
              key={index}
              className="
                bg-blue-950
                flex
                flex-row
                items-center
                px-5
                py-4
                rounded-md
                shadow-xl
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
          {level3.length !== 0 && (
            <div className="flex flex-row justify-between py-3">
              <div className="flex flex-col gap-2">
                <p className="text-teal-300 text-xl font-bold">
                  Tam öğrenilen ({level3.length})
                </p>
                <p className="text-white">
                  Bu terimleri doğru şekilde öğreniyorsunuz.
                </p>
              </div>
            </div>
          )}
          {level3.map((card: any, index: any) => (
            <div
              key={index}
              className="
                bg-blue-950
                flex
                flex-row
                items-center
                px-5
                py-4
                rounded-md
                shadow-xl
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
          onClick={() => router.push(`/set/${setId}/edit`)}
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
            active:bg-blue-950
            active:border-gray-50
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
