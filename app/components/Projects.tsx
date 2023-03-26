import React from 'react'
import ProjectsList from "../../utils/projects.json"
import ArrowRight from "./svg/arrow-right"
import Image from 'next/image'
import Github from './svg/github'
import Live from './svg/live'

type ProjectTypes = {
  title:string,
  tools:Array<string>,
  description:string,
  imgs:Array<string>,
  github?:string,
  live?:string
}

const Project = ({title,tools,description,imgs,github,live}:ProjectTypes) => {
return (
  <div className='px-1'> 
    <div className='flex flex-col md:flex-row md:items-start justify-between'>
      <div className=' md:w-[60%] md:-mr-20 md:z-30'>
          <h4 className='text-white uppercase font-medium text-lg lg:text-xl xl:text-2xl'>{title}</h4>
          <p className='text-secondary text-sm lg:text-base'>
              {tools.join(" + ")}
          </p>
          <p className='w-full py-4 px-3 md:px-5 md:py-6 text-xs text-black tracking-widest bg-secondary rounded-xl mt-3 mb-4 lg:text-sm'>
              {description}
          </p>
      </div>
              
      <div className='relative h-44 md:min-w-[50%] lg:scale-x-110 lg:h-52'>
        <div className='absolute top-0 left-0 z-10'>
            <Image
            src={`/projects/${imgs[0]}`}
            width={200}
            height={150}
            alt='project screenshot'
            className='object-cover border-[1px] rounded-xl opacity-90 border-gray-400'
            ></Image>
        </div>
        <div className='absolute top-1/3 left-1/4 lg:left-1/3'>
            <Image
            src={`/projects/${imgs[1]}`}
            width={200}
            height={150}
            alt='project screenshot'
            className=' object-cover border-[1px] rounded-xl opacity-90 border-gray-400'
            ></Image>
        </div>
      </div>
    </div>
    <div className='flex gap-4 text-gray-400 mt-2 md:-mt-4 lg:mt-0'>
        <a href={github}  target="_blank" rel='noreferrer'>
        { github?.length !== undefined && <Github></Github>}
        </a>
        <a href={live}  target="_blank" rel='noreferrer'>
        { live?.length !== undefined && <Live></Live>}
        </a>
    </div>
  </div>
)
}
const Projects = () => {  
  return (
    <div className='min-h-screen md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center' id='projects'>
      <h6 className='text-[22px] text-secondary uppercase mb-6 font-medium lg:mb-8'>Projects</h6>
      <div className='flex items-center gap-1 md:justify-between lg:px-4 lg:gap-3'>
        <ArrowRight transform="rotate(180,0,-10)" color="#777"></ArrowRight>
        {
          Object.keys(ProjectsList).map(project => {
            let cur_project = (ProjectsList as any)[project]
            return <Project {...cur_project} key={cur_project.id}></Project>
          })
        }
        <ArrowRight color="#fff"></ArrowRight>
      </div>
    </div>
  )
}

export default Projects