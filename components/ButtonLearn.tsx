interface ButtonLearnProps {
  index?: number;
  answer?: string;
  onClick?: (e: any) => void;
}

const ButtonLearn: React.FC<ButtonLearnProps> = ({
  index,
  answer,
  onClick,
}) => {
  return (
    <button
      value={answer}
      onClick={onClick}
      className="
        flex 
        flex-row 
        items-center 
        text-white
        gap-6  
        border-[1px]
        border-gray-600
        rounded-lg
        p-4
        hover:border-neutral-200
    "
    >
      <p className="text-white font-semibold">{index}</p>
      <p className="text-white font-semibold">{answer}</p>
    </button>
  );
};

export default ButtonLearn;
