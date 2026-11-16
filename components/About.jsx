import { Briefcase, GraduationCap, HomeIcon, MailIcon, User2 } from 'lucide-react'

import DevImg from '@/components/DevImg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  education,
  experience,
  languages,
  profile,
  skills,
  yearsOfExperience
} from '@/data/profile'

const Timeline = ({ title, icon, items }) => (
  <div className='flex flex-col gap-y-6'>
    <h4 className='flex items-center gap-x-4 text-[22px] font-medium text-primary'>
      {icon}
      {title}
    </h4>
    <ol className='flex flex-col gap-y-8'>
      {items.map((item) => (
        <li className='flex gap-x-8' key={`${item.title}-${item.subtitle}`}>
          <div className='relative ml-2.5 w-px bg-border' aria-hidden='true'>
            <div className='absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full bg-primary' />
          </div>
          <div>
            <p className='mb-2 text-xl font-semibold leading-none'>{item.title}</p>
            <p className='mb-3 text-lg leading-none text-muted-foreground'>{item.subtitle}</p>
            <p className='text-base font-medium'>{item.period}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
)

const About = () => {
  const years = yearsOfExperience()
  const infoData = [
    { icon: <User2 size={24} aria-hidden='true' />, text: profile.name },
    {
      icon: <MailIcon size={24} aria-hidden='true' />,
      text: profile.email,
      href: `mailto:${profile.email}`
    },
    { icon: <GraduationCap size={24} aria-hidden='true' />, text: education[0].degree },
    { icon: <HomeIcon size={24} aria-hidden='true' />, text: profile.location }
  ]

  return (
    <section id='about' className='pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mx-auto mb-8 text-center xl:mb-16'>About me</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='relative hidden flex-1 xl:flex'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/hero/jl.png'
              alt='Jean-Luc Gouaho'
            />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='grid h-auto w-full gap-1 sm:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger value='personal'>Personal info</TabsTrigger>
                <TabsTrigger value='qualifications'>Experience</TabsTrigger>
                <TabsTrigger value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className='mt-12 text-lg xl:mt-8'>
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      {years}+ years shipping web apps
                    </h3>
                    <p className='subtitle mx-auto max-w-xl xl:mx-0'>
                      I started as an intern at Royal Broker Solutions in 2022
                      and have worked there as a web developer since. Along
                      the way I completed a DEC in computer science at Cégep
                      de Granby (2024). I like owning a feature from the
                      schema to the last pixel, and my side projects are
                      where I try new stacks.
                    </p>
                    <ul className='mb-12 grid gap-4 xl:grid-cols-2'>
                      {infoData.map((item) => (
                        <li key={item.text} className='mx-auto flex items-center gap-x-4 xl:mx-0'>
                          <span className='text-primary'>{item.icon}</span>
                          {item.href
                            ? <a className='hover:text-primary hover:underline' href={item.href}>{item.text}</a>
                            : <span>{item.text}</span>}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <h4 className='mb-2 text-primary'>Languages</h4>
                      <div className='mb-4 border-b border-border' />
                      <ul className='grid gap-4 xl:grid-cols-2'>
                        {languages.map((language) => (
                          <li key={language.name} className='mx-auto xl:mx-0'>
                            {language.name}: {language.level}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='qualifications'>
                  <h3 className='h3 mb-8 text-center xl:text-left'>Experience and education</h3>
                  <div className='grid gap-y-12 md:grid-cols-2 md:gap-x-8'>
                    <Timeline
                      title='Experience'
                      icon={<Briefcase aria-hidden='true' />}
                      items={experience.map((item) => ({
                        title: item.company,
                        subtitle: item.role,
                        period: item.period
                      }))}
                    />
                    <Timeline
                      title='Education'
                      icon={<GraduationCap size={28} aria-hidden='true' />}
                      items={education.map((item) => ({
                        title: item.school,
                        subtitle: item.degree,
                        period: item.period
                      }))}
                    />
                  </div>
                </TabsContent>
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I work with</h3>
                    <div className='flex flex-col gap-y-8'>
                      {skills.map((group) => (
                        <div key={group.group}>
                          <h4 className='mb-2 text-xl font-semibold'>{group.group}</h4>
                          <div className='mb-4 border-b border-border' />
                          <ul className='flex flex-wrap justify-center gap-2 xl:justify-start'>
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className='rounded-full border border-border px-3 py-1 text-base'
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
