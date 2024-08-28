import React from "react";

import Image from "next/image";
import Link from "next/link";

// components
import Section from "./Section";
import Span from "./ui/Span";
import { Button } from "./ui/button";

// icons
import { EarthIcon } from "./icons/EarthIcon";

// data
import { LIST_CONTACT } from "@/data/datasPageContact";

import profileImage from "../../public/assets/matthieu_degny.jpeg";

const Introduction = () => {
  return (
    <Section className="flex flex-col gap-8 pt-4 lg:gap-20">
      <div className="flex  flex-col md:flex-row items-center justify-center gap-8 md:gap-4 px-2 pt-2">
        <div className=" order-1 md:order-2 flex items-start md:items-center  flex-grow h-[100%] w-[100%] md:w-[50%]">
          <div className="flex justify-between w-[100%]">
            <div className="flex flex-col justify-evenly gap-8">
              <h1>Matthieu DEGNY</h1>
              <h1>Front-end devloper</h1>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-8">
              {LIST_CONTACT.map((contact) => {
                if (contact.displaySectionIntro) {
                  return (
                    <div
                      key={contact.id}
                      className="flex gap-4 md:gap-12  flex-wrap justify-center mt-0"
                    >
                      <Button
                        variant="link"
                        size="lg"
                        className=" flex flex-row items-center p-0"
                      >
                        <Link
                          href={contact.link}
                          target="_blank"
                          download={
                            contact.title === "Resume" ? true : undefined
                          }
                          className="item-center transition-colors rounded flex items-center justify-center p-3 hover:bg-white  min-w-12 md:min-w-16"
                        >
                          {contact.Icon ? (
                            <div className="w-[20px] h-[20px] lg:h-[30px] lg:w-[40px] rounded-full flex items-center justify-center mr-0 lg:mr-0">
                              <contact.Icon />
                            </div>
                          ) : (
                            contact.imageUrl && (
                              <div className="w-[20px] h-[20px] lg:h-[30px] lg:w-[30px]  relative rounded-full overflow-hidden mr-0">
                                <Image
                                  src={contact.imageUrl}
                                  alt={contact.descriptionImage}
                                  fill
                                  priority
                                  placeholder="blur"
                                  className=" object-cover rounded-full"
                                />
                              </div>
                            )
                          )}
                        </Link>
                      </Button>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="order-2 md:order-1 flex items-center justify-center w-[100%] md:w-[50%] xl:w-[50%]">
          <Image
            src={profileImage}
            alt="Matthieu DEGNY"
            width={350}
            height={350}
            priority
            placeholder="blur"
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </div>
      <h2 className="leading-8 md:leading-10 font-light">
        I am a developer with a full-stack background, but specialized in
        front-end, particularly in <strong>TypeScript</strong> and{" "}
        <strong>React</strong>. I have delved deep into the React ecosystem to
        manage the entire client-side spectrum.
      </h2>
      <h2 className=" leading-8 md:leading-10 font-light">
        A contributor in the digital revolution, passionate about{" "}
        <Span>
          <EarthIcon size={20} aria-hidden="true" /> web
        </Span>{" "}
        development and high-tech activities.
      </h2>
    </Section>
  );
};

export default Introduction;
