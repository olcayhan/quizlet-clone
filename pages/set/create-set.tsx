import CardItem from "@/components/CardItem";
import Input from "@/components/Input";
import axios from "axios";

import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const AddSet = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    name: "",
    desc: "",
  });

  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      term: "",
      definition: "",
    },
    {
      id: uuidv4(),
      term: "",
      definition: "",
    },
  ]);

  const handleClick = useCallback(async () => {
    try {
      console.log("Çalıştı");
      const set = await axios.post("/api/set/create", { info });
      cards.map(async (card) => {
        await axios.post("/api/card/create", { card, set });
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }, [info, cards]);

  return (
    <div className="py-6 w-3/4 mx-auto px-3">
      <div className="flex flex-row items-center justify-between gap-4">
        <div
          className="bg-neutral-100 rounded-full p-3 cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <FaChevronLeft size={20} />
        </div>
        <p className="text-white text-lg md:text-3xl font-bold">
          Yeni Çalışma seti Oluştur
        </p>
        <button
          onClick={handleClick}
          className="
            text-white
            bg-blue-600
            hover:bg-blue-900 
            font-semibold
            p-2 
            rounded-md
            transition
        "
        >
          Oluştur
        </button>
      </div>

      <div className="flex flex-col items-center mt-8">
        <Input
          name="name"
          placeholder="'Biyoloji - 22.Bölüm: Evrim' gibi bir konu adı yazın."
          type="text"
          label="ADI"
          onChange={(e: any) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
        <Input
          name="desc"
          placeholder="Açıklama yazın..."
          type="text"
          label="AÇIKLAMA"
          onChange={(e: any) => {
            setInfo({ ...info, desc: e.target.value });
          }}
        />
      </div>

      <div className=" flex flex-col mt-24 gap-5">
        {cards?.map((item, key) => {
          return (
            <CardItem
              key={key}
              item={item}
              index={key}
              disable={cards.length < 3}
              setCards={setCards}
              cards={cards}
            />
          );
        })}

        <button
          onClick={() => {
            setCards([...cards, { id: uuidv4(), term: "", definition: "" }]);
          }}
          className="
            flex
            flex-row 
            items-center 
            justify-center 
            px-6 
            py-10
            bg-gray-800 
            rounded-xl
            group
            "
        >
          <div
            className="
          text-white 
            text-center
            font-bold
            border-b-[5px]
            pb-2
            border-blue-400
            group-hover:text-yellow-300
            group-hover:border-yellow-300
          "
          >
            + KART EKLE
          </div>
        </button>
        <div className="flex flex-row w-full justify-end items-center ">
          <button
            onClick={handleClick}
            className="
            text-white
            bg-blue-600
            hover:bg-blue-900 
            font-semibold
            p-5 
            rounded-md
            transition"
          >
            Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSet;
