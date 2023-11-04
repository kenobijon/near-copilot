import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-full top-0 border-3 text-bold rounded-md h-14 px-5 pr-8 placeholder:text-sm focus:outline-none",
          className
        )}
        type={type}
        name="text"
        placeholder=""
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
