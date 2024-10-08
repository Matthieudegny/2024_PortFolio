import React from "react";
import { PropsWithChildren } from "react";

import { cn } from "../lib/utils";

const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "max-w-6.5xl px-4 lg:px-10 m-auto pt-8 lg:pt-20",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Section;
