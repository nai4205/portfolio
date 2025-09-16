import React from 'react'

const SkillBubble = ({skill} : {skill: string}) => {
    console.log(skill)
  return (
    <div className="inline-block bg-[#d232fa99] text-white text-sm px-3 py-1 rounded-full mr-2 mt-2">
        <p className="text-white-50">{skill}</p>
    </div>
  )
}

export default SkillBubble