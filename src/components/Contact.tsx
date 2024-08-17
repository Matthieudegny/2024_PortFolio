import React from "react";
import Image from "next/image";

import Link from "next/link";
import Section from "./Section";

// model
import { ContactType } from "@/models/Contact_model";

// data
import { LIST_CONTACT } from "@/data/datasPageContact";

import { Button } from "./ui/button";

const Contact = () => {
  return (
    <Section className="flex flex-col gap-4">
      <h2>Contact</h2>
      <p>
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach me.
      </p>
      <div className="flex gap-12  flex-wrap justify-center">
        {LIST_CONTACT.map((contact: ContactType) => (
          <Button
            variant="link"
            size="lg"
            className=" flex flex-row items-center"
            key={contact.id}
          >
            <Link
              href={contact.link}
              target="_blank"
              className="item-center transition-colors rounded flex items-center"
            >
              {contact.Icon ? (
                <div className="w-[20px] h-[20px] lg:h-[30px] lg:w-[40px] rounded-full flex items-center justify-center mr-2 lg:mr-0">
                  <contact.Icon />
                </div>
              ) : (
                contact.imageUrl && (
                  <div className="w-[20px] h-[20px] lg:h-[30px] lg:w-[30px]  relative rounded-full overflow-hidden mr-2">
                    <Image
                      src={contact.imageUrl}
                      alt={contact.descriptionImage}
                      fill
                      className=" object-cover rounded-full"
                    />
                  </div>
                )
              )}

              <div className="flex items-center">
                <p className=" font-semibold">{contact.title}</p>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
