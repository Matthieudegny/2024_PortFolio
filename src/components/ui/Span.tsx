import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const Span = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className="bg-accent/10 hover:bg-accent/50 transition-colors font-mono border border-accent px-2 rounded-sm text-primary leading:4 md:leading-8 inline-flex items-center gap-2"
      {...props}
    />
  );
};

export default Span;
