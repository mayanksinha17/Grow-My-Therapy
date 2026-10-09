import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans text-sm font-medium tracking-wide transition-all duration-200 px-6 py-3 rounded-none text-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantStyles = {
    primary:
      "bg-theme-primary text-theme-text-light hover:bg-theme-primary-hover active:scale-[0.99]",
    secondary:
      "bg-transparent text-theme-primary border border-theme-primary hover:bg-theme-primary hover:text-theme-text-light",
    outline:
      "bg-transparent text-theme-primary border-b border-theme-primary pb-1 px-0 py-0 hover:text-theme-text-muted hover:border-theme-text-muted",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
