import React from "react";
import cn from "classnames";
import s from "./Button.module.scss";

export type ButtonSize = "sm" | "md";
export type ButtonVariant = "solid" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean; 
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "solid",
  leftIcon,
  rightIcon,
  iconOnly,
  className,
  children,
  disabled,
  ...props
}) => {
  const isIconOnly = iconOnly || (!children && (leftIcon || rightIcon));

  return (
    <button
      className={cn(
        s.btn,
        s[`size_${size}`],
        s[`variant_${variant}`],
        { [s.iconOnly]: isIconOnly },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className={cn(s.icon, s.left)}>{leftIcon}</span>}
      {!isIconOnly && <span className={s.text}>{children}</span>}
      {rightIcon && <span className={cn(s.icon, s.right)}>{rightIcon}</span>}
    </button>
  );
};
