// 6:07:59 time porjonto dekha hoice.

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { NavigationControl } from "./NavigationControl";
import ProgressBar from "./ProgressBar";
import { parseSection } from "@/utils/SummaryHelpers";
import { title } from "process";
import ContentSection from "./ContentSection";

// const parseSection = (section: string): { title: string; points: string[] } => {
//   const [title, ...content] = section.split("\n");

//   const cleanTitle = title.startsWith("#")
//     ? title.substring(1).trim()
//     : title.trim();

//   const points: string[] = [];
//   let currentPoint = "";

//   content.forEach((line) => {
//     const trimmedLine = line.trim();
//     if (trimmedLine.startsWith("•")) {
//       if (currentPoint) points.push(currentPoint.trim());
//       currentPoint = trimmedLine;
//     } else if (!trimmedLine) {
//       if (currentPoint) points.push(currentPoint.trim());
//       currentPoint = "";
//     } else {
//       currentPoint += " " + trimmedLine;
//     }
//   });

//   if (currentPoint) points.push(currentPoint.trim());

//   return {
//     title: cleanTitle,
//     points: points.filter(
//       (point) => point && !point.startsWith("#") && !point.startsWith("[Choose")
//     ),
//   };
// };

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-center items-center justify-center gap-2">
        {title}
      </h2>
    </div>
  );
};

export function SummaryViewer({ summary }: { summary: string }) {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () =>
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  const handlePrevious = () =>
    setCurrentSection((prev) => Math.max(prev - 1, 0));

  const sections = summary
    .split("\n#")
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  return (
    <Card className="relative px-2 h-[300px] sm:h-[400px] lg:h-[400px] w-full xl:w-[600px] overflow-hidden bg-linear-to-br from-background via-background/95 to-blue-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-blue-500/10">
      {/* {JSON.stringify(sections[currentSection].points)} */}

      {/* ProgressBar */}
      <ProgressBar
        sections={sections}
        currentSection={currentSection}
      ></ProgressBar>

      <div className="h-full overflow-y-auto scrollbar-hide pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="px-4 sm:px-6">
          {/* <h2>{sections[currentSection]?.title || ""}</h2> */}
          <SectionTitle
            title={sections[currentSection]?.title || ""}
          ></SectionTitle>

          {/* content section */}
          <ContentSection
            title={sections[currentSection]?.title || ""}
            points={sections[currentSection]?.points || []}
          ></ContentSection>

          {/* <ul>
            {sections[currentSection]?.points.map((point, index) => {
              return <li key={index}>{point}</li>;
            })}
          </ul> */}
        </div>
      </div>

      <NavigationControl
        currentSection={currentSection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={setCurrentSection}
      ></NavigationControl>
    </Card>
  );
}

{
  /* <CardHeader>
        <CardTitle>{sections[currentSection].title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
        </CardContent> */
}
