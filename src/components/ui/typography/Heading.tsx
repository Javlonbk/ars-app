import React from "react";
import type { ElementType } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const sizes = {
  1: "text-5xl font-bold",
  2: "text-4xl font-semibold",
  3: "text-3xl font-semibold",
  4: "text-2xl font-medium",
  5: "text-xl font-medium",
  6: "text-lg font-medium",
};

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
}) => {
  const Tag = `h${level}` as ElementType;
  return (
    <Tag className={`${sizes[level]} text-primary ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
