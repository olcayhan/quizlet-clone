import useSets from "@/hooks/useSets";
import SetItem from "./SetItem";

const SetFeed = () => {
  const { data: sets = [] } = useSets();
  return (
    <div className="container mx-auto px-2">
      <p className="text-white font-bold mt-20 mb-2">En son </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {sets.map((set: any, key: any) => {
          return <SetItem key={key} name={set.name} setId={set.id} />;
        })}
      </div>
    </div>
  );
};

export default SetFeed;
