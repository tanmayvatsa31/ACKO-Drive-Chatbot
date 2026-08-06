import type { ElementType, ReactNode } from "react";

type TypographyProps = {
  variant?: string;
  weight?: string;
  color?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Typography({
  variant = "body-md",
  weight,
  color,
  as: Tag = "p",
  className = "",
  children,
}: TypographyProps) {
  const classes = [
    "acko-typography",
    variant === "label-sm" ? "acko-typography--label-sm" : "",
    weight === "medium" ? "acko-typography--weight-medium" : "",
    weight === "semibold" ? "acko-typography--weight-semibold" : "",
    color === "invert" ? "acko-typography--invert" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
