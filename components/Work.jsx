'use client'

import Link from 'next/link'
import { Button } from './ui/button'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

// components
import ProjectCard from '@/components/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'

const projectData = [
  {
    image: '/work/1.png',
    category: 'Web Development',
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequatur.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/2.png',
    category: 'Web Development',
    name: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequatur.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/3.png',
    category: 'Web Development',
    name: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequatur.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/4.png',
    category: 'Web Development',
    name: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequatur.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/4.png',
    category: 'Web Development',
    name: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequatur.',
    link: '/',
    github: '/'
  }
]

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/*  text  */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xk:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'> Lastest Projects</h2>
          <p className='subtitle mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            consequatur.
          </p>
          <Link href='/work'>
            <Button className='mt-4'>View All Projects</Button>
          </Link>
        </div>
        {/*  slider  */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2
              }
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/*  Show only the 4 projects for the slides  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
export default Work
