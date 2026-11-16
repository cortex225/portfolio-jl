import Link from 'next/link'
import Image from 'next/image'

function Logo () {
  return (
    <Link href='/' aria-label='Jean-Luc Gouaho, home'>
      <Image
        className='h-auto w-[72px] rounded-xl xl:w-[90px]'
        src='/logo3.svg'
        alt=''
        width={90}
        height={61}
        priority
      />
    </Link>
  )
}

export default Logo
