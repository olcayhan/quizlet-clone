import useCards from "@/hooks/useCards";
import useCurrentUser from "@/hooks/useCurrentUser";

interface SetItemProps {
  name: string;
  setId: string;
}
const SetItem: React.FC<SetItemProps> = ({ name, setId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: cards } = useCards(setId);

  return (
    <div
      className="
        flex 
        flex-col 
        bg-slate-600 
        col-span-1
        cursor-pointer
        transition
        rounded-md
        border-b-[5px]
        border-transparent
        hover:border-neutral-50
        "
    >
      <div className="p-5">
        <p className="text-white font-bold">{name}</p>
        <p className="text-gray-400">{cards?.length} terim</p>
        <p className="pt-10 text-white font-semibold">
          {currentUser?.username}
        </p>
      </div>
    </div>
  );
};

export default SetItem;
