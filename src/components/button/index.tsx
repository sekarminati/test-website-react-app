import { ButtonHTMLAttributes, ReactNode } from "react";
import { createClassName } from "../../helpers";
import styles from "./Button.module.css";

const classNames = createClassName(styles);
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "transparent";
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  children?: ReactNode;
}
const Button = ({
  variant = "primary",
  size = "sm",
  className,
  children,
  ...rest
}: IButton) => {
  const classnames = classNames({
    [`${className}`]: !!className,
    [`${variant}`]: variant,
    [`${size}`]: size,
  });

  const onClick = (e: any) => {
    if (rest.onClick) rest.onClick(e);
    return;
  };

  return (
    <button
      type={rest.type || "button"}
      onClick={onClick}
      className={`${classnames}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
