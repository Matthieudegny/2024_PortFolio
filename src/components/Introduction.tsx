import React from "react";

import Image from "next/image";

// components
import Section from "./Section";
import Span from "./ui/Span";

// icons
import { BlockchainIcon } from "./icons/BlockChainIcon";
import { EarthIcon } from "./icons/EarthIcon";

const Introduction = () => {
  return (
    <Section className="flex flex-col gap-20">
      <div className="flex  flex-col md:flex-row items-center justify-center gap-8 md:gap-4 px-2 pt-2">
        <div className=" order-1 md:order-2 flex flex-col items-start  gap-8 justify-evenly flex-grow w-[100%] md:w-[50%] px-2 lg-px-0 ">
          <h1>Matthieu DEGNY</h1>
          <h1>Front-end devloper</h1>
        </div>
        <div className="order-2 md:order-1 flex items-center justify-center w-[100%] md:w-[50%] xl:w-[50%]">
          <div className=" rounded-full w-[350px] h-[350px] relative ">
            <Image
              src="/assets/photo_profile.jpg"
              alt="Picture of the author"
              fill
              priority
              className="rounded-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
      <h4 className="scroll-m-20 leading-8 md:leading-10 ">
        A player in the digital revolution, passionate about{" "}
        <Span>
          <EarthIcon size={20} />
          web development
        </Span>{" "}
        and high-tech activities. <br className="block md:hidden" />
        <br className="block md:hidden" />I am particularly interested in{" "}
        <Span>
          <BlockchainIcon size={20} />
          blockchain technology
        </Span>
        .
      </h4>
    </Section>
  );
};

export default Introduction;
