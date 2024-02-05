interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            rounded-full 
            font-semibold 
            hover:opacity-80 
            transition border-2
            ${fullWidth ? "w-full" : "w-fit"}
            ${secondary ? "bg-sky-500" : "bg-neutral-100"}
            ${secondary ? "text-white" : "text-slater-500"}
            ${secondary ? "border-sky-500" : "border-neutral-400"}
            ${large ? "text-xl" : "text-md"}
            ${large ? "px-5" : "px-4"}
            ${large ? "py-3" : "py-2"}
            ${outline ? "bg-transparent" : ""}
            ${outline ? "border-white" : ""}
            ${outline ? "text-slate-500" : ""}
            `}
    >
      {label}
    </button>
  );
};

export default Button;
