import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    `relative z-10 px-6 py-3 rounded-xl font-semibold
    text-center
    transition-all duration-300
    active:scale-95`;

  const variants = {
    primary: `
      text-white bg-blue-600
      shadow-[0_0_15px_rgba(59,130,246,0.5)]
      hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
      hover:bg-blue-500
      hover:-translate-y-1
      hover:scale-[1.03]
    `,

    secondary: `
      text-white bg-white/10 border border-white/20
      hover:bg-white/20
      backdrop-blur-md
      hover:-translate-y-0.5
    `,
  };

  const classes = twMerge(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}