import DevImg from '@/components/DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2
} from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={24} />,
    text: 'Jean-Luc Gouaho'
  },
  {
    icon: <PhoneCall size={24} />,
    text: '+ 1 450 521 1098'
  },
  {
    icon: <MailIcon size={24} />,
    text: 'jlgouaho@gmail.com'
  },
  {
    icon: <Calendar size={24} />,
    text: 'Born on 1st Augut 1999'
  },
  {
    icon: <GraduationCap size={24} />,
    text: 'DEC in Computer Science'
  },
  {
    icon: <HomeIcon size={24} />,
    text: 'Canada'
  }
]

const skillsData = [
  {
    title: 'skills',
    data: [
      {
        name: '.NET',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Next',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Tailwind',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Sass',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Framer Motion',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Framer Motion',
        iconPath: '/about/vscode.svg'
      }
    ]
  },
  {
    title: 'frontend',
    data: [
      {
        name: 'JavaScript',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'React',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Vue.js',
        iconPath: '/about/vscode.svg'
      }
    ]
  },
  {
    title: 'backend',
    data: [
      {
        name: 'C#',
        iconPath: '/about/vscode.svg'
      },
      {
        name: '.NET Framework',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'SQL',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'NoSQL',
        iconPath: '/about/vscode.svg'
      }
    ]
  },
  {
    title: 'devOps',
    data: [
      {
        name: 'Docker',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'Azure Cloud',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'AWS',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'NoSQL',
        iconPath: '/about/vscode.svg'
      }
    ]
  },
  {
    title: 'Additional Key Technologies',
    data: [
      {
        name: 'AGILE/SCRUM',
        iconPath: '/about/vscode.svg'
      },
      {
        name: 'WordPress',
        iconPath: '/about/vscode.svg'
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
        name: 'VS Code'
      },
      {
        imgPath: '/about/figma.svg',
        name: 'Figma'
      },
      {
        imgPath: '/about/notion.svg',
        name: 'IntelliJ'
      },
      {
        imgPath: '/about/wordpress.svg',
        name: 'Wordpress'
      }
    ]
  }
]

const qualificationsData = [
  {
    title: 'education',
    data: [
      {
        university: 'Cegep de Granby',
        qualification: 'DEC in Computer Science and Management',
        years: 'Québec, Canada - 2024'
      },
      {
        university: 'College le Figuier',
        qualification: 'Hight School Degree',
        years: "Abidjan, Côte d'Ivoire - 2017"
      }
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Royal Broker Solutions',
        role: 'Web Developer',
        years: 'August 2022 - Now'
      },
      {
        company: 'Royal Broker Solutions',
        role: 'Stage Web Developer',
        years: 'April 2022 - August 2022'
      },
      {
        company: 'Rogers Communication',
        role: 'Seller Specialist',
        years: 'November 2021 - Avril 2022'
      },
      {
        company: 'Best Buy',
        role: 'Customer Service',
        years: 'October 2020 - November 2021'
      }
    ]
  }
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section className="xl:h-[860px pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {" "}
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/jl.png"
            />
          </div>
          {/*  tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/*  Tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 2 Years{" "}
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I am a full-stack web developer with 2 years of
                      experience. I specialize in building responsive and
                      interactive websites and web applications. I am passionate
                      about learning new technologies and always look for
                      opportunities to improve my skills.
                    </p>
                    {/*  icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/*  language  */}
                    <div>
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border" />
                      <div className="grid xl:grid-cols-2 gap-4">
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                          <div className="">French -</div>
                          <div>Native</div>
                        </div>
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                          <div className="">English -</div>
                          <div>Professional Level</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/*  experience & education wrapper  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/*  experience  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>
                        {/*  list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group "
                                  key={index}>
                                  <div className="h-[84px w-[1px] bg-border relative ml-2.5">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute  -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>

                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/*  education  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>
                        {/*  list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group mt-1"
                                  key={index}>
                                  <div className="h-[84px w-[1px] bg-border relative ml-2.5">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute  -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>

                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4" />
                      {/*  skill list  */}
                      <div className="grid md:grid-cols-2 gap-y-8 ">
                        {getData(skillsData, "frontend").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-4 mb-4"
                                key={index}>
                                <div className="text-primary">
                                  <Image
                                    src={item.iconPath}
                                    width={24}
                                    height={24}
                                    alt=""
                                  />
                                </div>
                                <div>{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-y-8 ">
                        {getData(skillsData, "backend").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-4 mb-4"
                                key={index}>
                                <div className="text-primary">
                                  <Image
                                    src={item.iconPath}
                                    width={24}
                                    height={24}
                                    alt=""
                                  />
                                </div>
                                <div>{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4" />
                      {/*  skill list  */}
                      <div>
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-4 mb-4"
                                key={index}>
                                <div className="text-primary">
                                  <Image
                                    src={item.imgPath}
                                    width={24}
                                    height={24}
                                    alt=""
                                  />
                                </div>
                                <div>{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About
