import { BsTrash } from "react-icons/bs";
import { useState, useCallback, useEffect } from "react";
import Input from "./Input";

interface CardItemProps {
  index: number;
  item: Record<any, string>;
  disable: boolean;
  setCards: any;
  cards: any;
}

const CardItem: React.FC<CardItemProps> = ({
  index,
  item,
  disable,
  setCards,
  cards,
}) => {
  const handleDelete = useCallback(() => {
    if (disable) return;
    let temp = cards.filter((c: any) => c.id !== item.id);
    setCards(temp);
  }, [cards]);

  return (
    <div className="bg-gray-800 rounded-xl">
      <div
        className="
        flex
        flex-row 
        items-center 
        justify-between 
        px-6 
        py-4
        border-b-[2px]
        border-neutral-900
        "
      >
        <p className="text-white font-semibold">{index + 1}</p>

        <BsTrash
          color="white"
          size={20}
          className="cursor-pointer"
          onClick={handleDelete}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-5 px-4 pb-8 ">
        <Input
          label="TERİM"
          name="terim"
          onChange={(e) => {
            let temp = [...cards];
            for (let i = 0; i < temp.length; i++) {
              temp[i].id === item.id && (temp[i].term = e.target.value);
            }
            setCards(temp);
          }}
          value={item.term}
        />
        <Input
          label="TANIM"
          name="tanım"
          onChange={(e) => {
            let temp = [...cards];
            for (let i = 0; i < temp.length; i++) {
              temp[i].id === item.id && (temp[i].definition = e.target.value);
            }
            setCards(temp);
          }}
          value={item.definition}
        />
      </div>
    </div>
  );
};

export default CardItem;
