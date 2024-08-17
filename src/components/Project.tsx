import React from "react";

import Section from "./Section";
import Link from "next/link";

import { Button } from "./ui/button";

import { ChartCandlestick } from "lucide-react";

const Project = () => {
  return (
    <Section className="flex flex-col gap-4">
      <h2 className="">Project Selected</h2>

      <div className="flex flex-col gap-4 ">
        <article className="flex flex-col gap-4 w-[100%] ">
          <div className="flex items-center justify-between">
            <h3>Stock Market Dashboard</h3>
            <div className="hidden md:block">
              <Link
                href="https://dashboard-front-pink.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                passHref
                legacyBehavior
              >
                <Button
                  variant="default"
                  size="lg"
                  aria-label="Try the Stock Market Investment Dashboard (opens in a new tab) "
                  className="flex items-center gap-2"
                >
                  <ChartCandlestick size={20} />
                  Try Stock Market Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <p>
            I developed a full-stack application designed to streamline and
            synthesize stock market investment activities.
          </p>

          <p>
            Because we learn more from our failures than our successes, this
            application allows for detailed documentation of investment
            activity. It provides comprehensive graphs and in-depth analyses,
            helping users identify their weaknesses and refine their strategies
            over time (no responsive).
          </p>
          <h3>Technologies Used:</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>Front-End:</strong> TypeScript, React, React Query, React
              Hook Form, Zustand, ApexCharts.
            </li>
            <li>
              <strong>Back-End:</strong> TypeScript, Nest.js.
            </li>
          </ul>
        </article>
        <div className="w-[100%] ">
          <video
            loop
            muted
            autoPlay
            controls
            className={`w-full  object-cover  
    rounded-md
        cursor-pointer`}
          >
            <source src={"/assets/MyDashBoardVideo.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </Section>
  );
};

export default Project;
