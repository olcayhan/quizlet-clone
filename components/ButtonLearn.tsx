interface ButtonLearnProps {
  index?: number;
  answer?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  correct?: string;
  chosen?: string;
}

const ButtonLearn: React.FC<ButtonLearnProps> = ({
  index,
  answer,
  onClick,
  disabled,
  correct,
  chosen,
}) => {
  return (
    <button
      disabled={disabled}
      value={answer}
      onClick={onClick}
      className={`
      ${disabled && correct === answer && "bg-[#18ae79]"}
      flex 
      flex-row 
      items-center 
      text-white
      gap-6  
      border-[1px]
      ${
        disabled && correct !== answer && chosen == answer
          ? "border-red-600"
          : "border-gray-600"
      }
      rounded-lg
      p-4
      ${!disabled && "hover:border-neutral-200"}
      `}
    >
      <p className="text-white font-semibold pointer-events-none">{index}</p>
      <p className="text-white font-semibold pointer-events-none">{answer}</p>
    </button>
  );
};

export default ButtonLearn;
