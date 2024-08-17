import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const Span = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className="bg-accent/30 hover:bg-accent/50 transition-colors font-mono border border-accent px-2 rounded-sm text-primary inline-flex items-center gap-1"
      {...props}
    />
  );
};

export default Span;
