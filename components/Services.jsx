import { Blocks, GanttChartSquare, Smartphone } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const servicesData = [
  {
    title: 'Web applications',
    description:
      'Dashboards, internal tools and SaaS products in React and Next.js, built to stay fast and readable as they grow.',
    icon: <GanttChartSquare size={72} strokeWidth={0.8} aria-hidden='true' />
  },
  {
    title: 'APIs and data',
    description:
      'Backends in .NET or Node.js on PostgreSQL, with third-party integrations like Plaid, Stripe or Google Places.',
    icon: <Blocks size={72} strokeWidth={0.8} aria-hidden='true' />
  },
  {
    title: 'Mobile-first products',
    description:
      'Installable PWAs designed for the phone first, with offline support and screens made for thumbs.',
    icon: <Smartphone size={72} strokeWidth={0.8} aria-hidden='true' />
  }
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mx-auto mb-20 text-center xl:mb-24'>What I do</h2>
        <div className='grid justify-items-center gap-y-20 xl:grid-cols-3 xl:gap-x-8'>
          {servicesData.map((item) => (
            <Card
              className='relative flex w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16'
              key={item.title}
            >
              <CardHeader className='absolute -top-[60px] text-primary'>
                <div className='flex h-[80px] w-[140px] items-center justify-center bg-background'>
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className='text-center'>
                <CardTitle className='mb-4'>{item.title}</CardTitle>
                <CardDescription className='text-lg'>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
