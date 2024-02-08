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
  onClick,
  large,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:text-white
        hover:bg-sky-500
        hover:border-sky-500
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-neutral-200" : "bg-sky-500"}
        ${secondary ? "text-neutral-500" : "text-white"}
        ${secondary ? "border-neutral-300" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-neutral-200" : ""}
        ${outline ? "border-neutral-300" : ""}
        ${outline ? "text-neutral-500" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
