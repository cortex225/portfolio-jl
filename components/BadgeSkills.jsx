'use client'


const BadgeSkills = ({
  containerStyles,
  icon,

}) => {
  return (
    <div className={`badgeSkills ${containerStyles} px-4 flex justify-center`}>
      <div className="text-5xl text-primary text-center">{icon}</div>
    </div>
  );
}

export default BadgeSkills
