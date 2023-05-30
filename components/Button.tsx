import { IconContext, IconType } from "react-icons/lib";

interface ButtonProps {
  Icon?: IconType;
  text?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ Icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
            flex 
            flex-row 
            items-center 
            gap-3 
            shadow-xl
            bg-blue-950 
            py-3 
            rounded-lg 
            px-3
            border-b-[5px]
            border-transparent
            cursor-pointer
            hover:border-neutral-100
            transition
            "
    >
      <Icon color="white" size={24} />
      <p className="text-white font-bold">{text}</p>
    </button>
  );
};

export default Button;
