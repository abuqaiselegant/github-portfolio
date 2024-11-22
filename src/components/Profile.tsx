import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "Github",
    link: "https://github.com/abuqaiselegant",
    icon: <FaGithub className="size-4" />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/abuqais",
    icon: <FaLinkedin className="size-4" />,
  },
];

export const Profile = () => {
  return (
    <Card>
      <CardContent className="pt-6 relative"> {/* Added relative positioning */}
        <div className="absolute top-4 right-4"> {/* Added theme toggle */}
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
            <Image
              width={150}
              height={150}
              quality={100}
              src="/MyPic.jpeg"
              alt="Profile Picture"
              className="rounded-full size-12 md:w-full h-auto object-cover border-2"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                Abu Qais
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                MSc Student @University of Nottingham
              </p>
            </div>
          </div>
          <p className="mt-2 text-start text-sm text-muted-foreground">
            Passionate developer and data enthusiast who loves turning complex problems into elegant solutions. Currently expanding horizons with MSc in Data Science at University of Nottingham, backed by industry experience in machine learning and automation.
          </p>
          <Button className="mt-4 w-full" asChild>
            <Link
              target="_blank"
              href="/resume.pdf"
              className="font-semibold"
            >
              VIEW RESUME
            </Link>
          </Button>
          <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
            {socials.map((s, i) => {
              const parts = s.link.split("/");
              const username = parts[parts.length - 1];
              return (
                <Link
                  key={i}
                  href={s.link}
                  target="_blank"
                  aria-label={`${s.name} Logo`}
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  {s.icon}
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                    /{username}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};