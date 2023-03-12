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
          <h3 className='text-white uppercase font-medium text-lg'>{title}</h3>
          <h4 className='text-secondary text-sm'>
              {tools.join(" + ")}
          </h4>
          <p className='w-full py-4 px-3 text-xs text-black tracking-widest bg-secondary rounded-xl mt-3 mb-4'>
              {description}
          </p>
     
      <div className='relative h-44'>
          <div className='absolute top-0 left-0 z-10'>
              <Image
              src={`/projects/${imgs[0]}`}
              width={200}
              height={150}
              alt='project screenshot'
              className='object-cover border-[1px] rounded-xl opacity-90 border-gray-400'
              ></Image>
          </div>
          <div className='absolute top-1/3 left-1/4'>
              <Image
              src={`/projects/${imgs[1]}`}
              width={200}
              height={150}
              alt='project screenshot'
              className=' object-cover border-[1px] rounded-xl opacity-90 border-gray-400'
              ></Image>
          </div>
      </div>
      <div className='flex gap-4 text-gray-400 mt-2'>
          <a href={github}  target="_blank">
          { github?.length !== undefined && <Github></Github>}
          </a>
          <a href={live}  target="_blank">
          { live?.length !== undefined && <Live></Live>}
          </a>
      </div>
  </div>
)
}
const Projects = () => {  
  return (
    <div className='min-h-screen flex flex-col justify-center'>
      <h6 className='text-[22px] text-secondary uppercase mb-6 font-medium'>Projects</h6>
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