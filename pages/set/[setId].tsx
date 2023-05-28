import CardItem from "@/components/CardItem";
import Input from "@/components/Input";
import { useRouter } from "next/router";
import { useState } from "react";

const AddSet = () => {
  const router = useRouter();
  const { setId } = router.query;
  const [cards, setCards] = useState([
    {
      term: "",
      definition: "",
    },
    {
      term: "",
      definition: "",
    },
  ]);

  return (
    <div className="py-6 w-3/4 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <p className="text-white text-3xl font-bold">
          Yeni Çalışma seti Oluştur
        </p>
        <button
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
        />
        <Input
          name="name"
          placeholder="Açıklama yazın..."
          type="text"
          label="AÇIKLAMA"
        />
      </div>

      <div className=" flex flex-col mt-24 gap-5">
        {cards.map((item, key) => {
          return <CardItem key={key} item={item} index={key} />;
        })}

        <button
          onClick={() => {
            setCards([...cards, { term: "", definition: "" }]);
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
      </div>
    </div>
  );
};

export default AddSet;
