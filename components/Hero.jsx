import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import BadgeSkills from "./BadgeSkills";
import IconReact from "./icons/IconReact";
import IconNextjs from "./icons/IconNextjs";
import IconPostgresql from "./icons/IconPostgresql";
import { PinContainer } from "./ui/pinContainer";
import OrbitingCircles from "./magicui/orbiting-circles";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=" text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <TextGenerateEffect
              words="Hi, I'm Jean-Luc Gouaho"
              className="h1 mb-4  w-full xl:mx-0"
            />
            <TextGenerateEffect
              words="A full-stack developer passionate about creating innovative web and mobile solutions."
              className="subtitle max-w-[490px] mx-auto xl:mx-0"
            />
            {/* button CTA */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              {/* button download CV */}
              <a href="../public/CV_JL.pdf" download>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[26px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative ">
            {/* badge annee experience */}

            <BadgeSkills
              className="px-4"
              containerStyles="absolute top-[24%] -left-[2rem]"
              icon={<IconReact />}
            />
            <BadgeSkills
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<IconNextjs />}
            />
            <BadgeSkills
              containerStyles="absolute top-[55%] -right-8"
              icon={<IconPostgresql />}
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/jl-avatar.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>

      <div className="xl:hidden md:flex justify-center my-8 gap-4">
        <BadgeSkills containerStyles="" icon={<IconPostgresql />} />
        <BadgeSkills containerStyles="" icon={<IconPostgresql />} />
        <BadgeSkills containerStyles="" icon={<IconPostgresql />} />
        <BadgeSkills containerStyles="" icon={<IconPostgresql />} />
        <BadgeSkills containerStyles="" icon={<IconPostgresql />} />
      </div>
    </section>
  );
};

export default Hero;
