import React, { Suspense } from "react";

// compoenent
import Section from "./Section";
import { Button } from "./ui/button";

// data
import { LINK_PROJECT_DASHBOARD } from "../data/datasPageProject";

// icons
import { ChartCandlestick } from "lucide-react";

const Project = () => {
  return (
    <Section className="flex flex-col gap-4">
      <h3>Side Project Selected</h3>

      <div className="flex flex-col gap-4 ">
        <article className="flex flex-col gap-4 w-[100%] ">
          <div className="flex items-end justify-between">
            <h4>Stock Market Dashboard</h4>
            <div className="hidden md:block">
              <a
                href={LINK_PROJECT_DASHBOARD}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>
          </div>
          <p>
            I created a full-stack application focused on enhancing stock market
            investment processes.
          </p>
          <p>
            The backend is built with a RESTful API using Node.js (Nest.js), and
            the data is managed through a MySQL database. Additionally, the
            application fetches real-time economic data, including BTC and
            Nasdaq prices, from public APIs to offer users valuable insights for
            their investment decisions.
          </p>
          <h4>Technologies Used:</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>Front-End:</strong> TypeScript, React, React Query, React
              Hook Form, Zustand, ApexCharts, Fullcalendar.
            </li>
            <li>
              <strong>Back-End:</strong> TypeScript, Node.js ( Nest.js ), Jest.
            </li>
            <li>
              <strong>Database:</strong> MySQL.
            </li>
          </ul>
        </article>
        <Suspense fallback={<p>Loading video...</p>}>
          <div className="w-[100%] ">
            <figure>
              <figcaption className="invisible h-0">
                Video demonstration of the Stock Market Dashboard
              </figcaption>
              <video
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                controls
                className={`w-full  object-cover  
    rounded-md
        cursor-pointer`}
              >
                <source src={"/assets/MyDashBoardVideo.mp4"} type="video/mp4" />
              </video>
            </figure>
          </div>
        </Suspense>
      </div>
    </Section>
  );
};

export default Project;
