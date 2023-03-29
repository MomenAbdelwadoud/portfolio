import React from 'react'
import Open from './svg/new-window'

const Button = () => {
  return (
    <a  rel="noreferrer" target={"_blank"} href="https://drive.google.com/file/d/1rrCDZibL8jwFQZlQPN4BrPWjzN6hGRDg/view?usp=sharing">
      <button className='py-2 px-5 justify-center items-center bg-primary opacity-80 text-black rounded-lg flex gap-2 font-semibold text-sm'>
          <p>Open CV</p>
              <Open></Open>
      </button>
    </a>
  )
}

export default Button