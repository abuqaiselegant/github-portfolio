import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Project Engineer",
    company: "Wipro",
    logo: "/wipro.png", // You'll need to add this logo to your public folder
    duration: "April 2022 - June 2024",
    description:
      "Engineered automated test scripts using Java and Selenium, implemented RESTful APIs using Spring Boot, developed Selenium Test Automation Framework with TestNG, and applied BDD principles using Cucumber.",
    link: "https://wipro.com",
    images: [], // Add relevant project images if available
  },
  {
    role: "Machine Learning Intern",
    company: "Internity Foundation",
    logo: "/internity.webp", // You'll need to add this logo to your public folder
    duration: "June 2021 - July 2021",
    description:
      "Implemented NLP model using Multinomial Naïve Bayes, developed sentiment analysis on IMDb dataset, and applied text processing techniques including stemming and tokenization.",
    link: "https://linkedin.com/company/internity/posts/?feedView=all",
    images: [
      "/nlp-project.png", // Add actual project images
    ],
  },
  {
    role: "Data Science Intern",
    company: "Internity Foundation",
    logo: "/internity.webp", // You'll need to add this logo to your public folder
    duration: "December 2020 - January 2021",
    description:
      "Analyzed web server logs for XSS attack detection, performed web scraping and exploratory data analysis, and enhanced web server security through analytics.",
    link: "https://linkedin.com/company/internity/posts/?feedView=all",
    images: [
      "/data-analysis.png", // Add actual project images
    ],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
