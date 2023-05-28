import { BsTrash } from "react-icons/bs";
import Input from "./Input";

interface CardItemProps {
  index: number;
  item: Record<any, string>;
}

const CardItem: React.FC<CardItemProps> = ({ index, item }) => {
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
        <BsTrash color="white" />
      </div>

      <div className="flex flex-col sm:flex-row gap-5 px-4 pb-8 ">
        <Input label="TERİM" name="terim" />
        <Input label="TANIM" name="tanım" />
      </div>
    </div>
  );
};

export default CardItem;
