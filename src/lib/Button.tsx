import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function styleMerge(...styles: ClassValue[]) {
  return twMerge(clsx(...styles));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const baseStyles = "cursor-pointer rounded-[10px] p-2 px-[1.2em]";

  const variantStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <button
      className={styleMerge(
        baseStyles,
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
