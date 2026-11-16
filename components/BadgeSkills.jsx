const BadgeSkills = ({ containerStyles = '', icon, label }) => {
  return (
    <div
      className={`badgeSkills flex justify-center px-4 ${containerStyles}`}
      role='img'
      aria-label={label}
      title={label}
    >
      <div className='text-center text-5xl text-primary' aria-hidden='true'>
        {icon}
      </div>
    </div>
  )
}

export default BadgeSkills
