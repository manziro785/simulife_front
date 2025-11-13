import * as React from "react";

function Label({
  className,
  htmlFor,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      htmlFor={htmlFor}
      data-slot="label"
      className={
        "flex items-center gap-2 text-sm leading-none font-medium select-none " +
        (className ?? "")
      }
      {...props}
    >
      {children}
    </label>
  );
}

export { Label };
