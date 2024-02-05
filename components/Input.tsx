interface InputProps {
  placehorder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  placehorder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placehorder}
      type={type}
      className="w-full p-4 text-lg bg-white border-2 border-neutral-100 rounded-md outline-none text-black focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-100 disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
