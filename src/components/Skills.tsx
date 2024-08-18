"use client";
import React, { useState } from "react";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

import Section from "./Section";

import { Card, CardTitle, CardHeader, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

import "../style/animation.css";

// datas
import { LIST_MAIN_SKILLS, LIST_SUB_SKILLS } from "../data/datasPageSkills";

// models
import {
  MainSkillType,
  SUBSKILLPARENTTYPE,
  SUBSKILLTYPE,
} from "../models/Skills_model";

const CardMainSkill = ({ skill }: { skill: MainSkillType }) => {
  return (
    <Card className="p-4 w-[100%] md:w-[calc(50% - 0.5rem]">
      <CardHeader className="flex flex-row items-center gap-4">
        <skill.Icon size={50} />
        <CardTitle className="flex items-center font-semibold tracking-tight mt-0">
          {skill.title}
        </CardTitle>
      </CardHeader>

      <CardDescription>{skill.description}</CardDescription>
    </Card>
  );
};

const CardSubSkillContainer = ({
  subSkillParent,
}: {
  subSkillParent: SUBSKILLPARENTTYPE;
}) => {
  return (
    <div
      key={subSkillParent.id}
      className="flex flex-col  md:flex-row md:items-center  gap-1 md:gap-2 lg:gap-4"
    >
      <CardDescription className="">{subSkillParent.title}</CardDescription>
      <div className="flex flex-row gap-4">
        {subSkillParent.listSUbSkills.map((subSkill: SUBSKILLTYPE) => (
          <CardSubSkillItem key={subSkill.id} subSkill={subSkill} />
        ))}
      </div>
    </div>
  );
};

const CardSubSkillItem = ({ subSkill }: { subSkill: SUBSKILLTYPE }) => {
  return (
    <Card
      key={subSkill.id}
      className="p-2  hover:bg-opacity-10 flex flex-row items-center gap-2"
    >
      {subSkill.Icon ? (
        <div className="w-[20px] h-[20px] lg:h-[30px] lg:w-[40px]">
          <subSkill.Icon />
        </div>
      ) : (
        subSkill.imageUrl && (
          <div className="w-[30px] h-[20px] lg:h-[30px] lg:w-[40px]  relative">
            <Image
              src={subSkill.imageUrl}
              alt={subSkill.title}
              fill
              className="aspect-square object-cover"
            />
          </div>
        )
      )}
      <CardTitle className="flex items-center font-semibold tracking-tight mt-0 text-sm md:text-base lg:text-base">
        {subSkill.title}
      </CardTitle>
    </Card>
  );
};

const Skills = () => {
  const [showListSubSkills, setshowListSubSkills] = useState(false);
  return (
    <Section className="flex flex-col gap-4">
      <h2>How I can help you?</h2>
      <p>
        I can create perfect experiences for your customer, making all the
        applications from scratch.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        {LIST_MAIN_SKILLS.map((skill: MainSkillType) => (
          <CardMainSkill key={skill.id} skill={skill} />
        ))}
      </div>

      <Card className="p-6 w-[100%] md:w-[calc(50% - 0.5rem] gap-0">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center font-semibold tracking-tight mt-0">
            React eco-system
          </CardTitle>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setshowListSubSkills(!showListSubSkills)}
          >
            <ChevronDown
              className="h-4 w-4"
              style={{
                transform: showListSubSkills
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </Button>
        </CardHeader>

        <div
          className={`transition-height ${showListSubSkills ? "show" : ""} `}
        >
          <div
            className={` flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-10 pt-4 pb-3`}
          >
            {LIST_SUB_SKILLS.map((subSkillParent: SUBSKILLPARENTTYPE) => (
              <CardSubSkillContainer
                key={subSkillParent.id}
                subSkillParent={subSkillParent}
              />
            ))}
          </div>
        </div>
      </Card>
      <p>
        I am also familiar with backend logic, including RESTful APIs and
        frameworks such as C#, Node.js (Express, Nest.js).
      </p>
    </Section>
  );
};

export default Skills;
