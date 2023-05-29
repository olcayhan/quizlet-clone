interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  onChange?: (value: any) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className="w-full">
      <input
        id={name}
        className="
            w-full
            h-10 
            mt-6 
            mb-1
            bg-transparent 
            border-b-[3px] 
            text-white 
            font-semibold 
            px-2
            outline-none
            focus:border-yellow-500
            focus:border-b-[4px]
            transition
            placeholder:text-gray-400
            "
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={name} className="text-neutral-300 font-semibold text-sm">
        {label}
      </label>
    </div>
  );
};

export default Input;
