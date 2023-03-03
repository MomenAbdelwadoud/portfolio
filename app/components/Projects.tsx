import React from 'react'
import Image from 'next/image'
import Project from './Project'
import ProjectsList from "../../utils/projects.json"
import ArrowRight from "./svg/arrow-right"

const Projects = () => {  
  return (
    <div className='min-h-screen flex flex-col justify-center'>
      <h6 className='text-[22px] text-secondary uppercase mb-6'>Projects</h6>
      <div className='flex items-center gap-1'>
        <ArrowRight transform="rotate(180,0,-10)" color="#777"></ArrowRight>
        {
          Object.keys(ProjectsList).map(project => {
            let cur_project = (ProjectsList as any)[project]
            return <Project {...cur_project}></Project>
          })
        }
        <ArrowRight color="#fff"></ArrowRight>
      </div>
    </div>
  )
}

export default Projects