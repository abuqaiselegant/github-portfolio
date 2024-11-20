import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Deepfake Audio Detection",
    description:
      "CNN-based audio classification model for detecting artificial voices, trained on 28,700 ASV spoof audio files using MFCC, STFT, and FFT features",
    tech: "Python",
    link: "https://github.com/abuqaiselegant/DeepFake_detection",
  },
  {
    title: "Stock Market Prediction",
    description:
      "NIFTY50 stock price prediction using LASSO regression with technical indicators (RSI, Super Trend, Pivot Level) and time lag analysis",
    tech: "Python",
    link: "https://github.com/akshar99/AI-Trading",
  },
  {
    title: "Sentiment Analysis",
    description:
      "NLP model using Multinomial Naïve Bayes for IMDb dataset sentiment analysis, implementing stemming, bag of words, and tokenization",
    tech: "Python",
    link: "https://github.com/tanvipenumudy/ML-Stream-Interns-Summer-21/tree/main/Abu%20Qais/Sentiment%20Analysis%20aclimdb",
  },
  {
    title: "Web Server Log Analysis",
    description:
      "XSS attack detection system using web scraping and exploratory data analysis on URL log data",
    tech: "Python",
    link: "https://github.com/abuqaiselegant/internitytask001",
  },
];

const techColors = {
  Python: "bg-yellow-500",
  Java: "bg-red-500",
  "Machine Learning": "bg-purple-500",
  "Data Science": "bg-blue-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
