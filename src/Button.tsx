import * as React from "react";

interface ButtonProps {
  size: "small" | "medium";
}

const sizes = {
  small: "12px",
  medium: "16px"
};

export const Button: React.FC<ButtonProps> = ({ children, size, ...props }) => {
  return (
    <>
      <button type="button" {...props}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            font-size: ${sizes[size]};
          }
        `}
      </style>
    </>
  );
};
