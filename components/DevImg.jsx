import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc, alt, priority = false }) => {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        priority={priority}
        sizes='510px'
        className='object-contain'
      />
    </div>
  )
}

export default DevImg
