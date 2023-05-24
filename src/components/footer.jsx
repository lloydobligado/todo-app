import React from 'react'

const Footer = ({mode}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className={`w-full flex absolute top-[734px] justify-center pb-[52px] text-[${mode ? '#9495A5' : '#5B5E7E'}] text-[14px] leading-[14px] tracking-[-0.194444px]`}><small>@ {currentYear} Obligado Development. All right reserved.</small></footer>
  )
}

export default Footer