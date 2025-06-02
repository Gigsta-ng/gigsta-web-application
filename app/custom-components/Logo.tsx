import Image from 'next/image'
import React from 'react';
import assets from "../image"

const Logo = () => {
  return (
    <div className='flex md:gap-4 gap-2 items-center'>
        <Image src={assets.icons.gigsta} alt='gigsta_logo' className='md:w-[50px] md:h-[50px] w-[35px] h-[35px]' width={50} height={50} />
        <span className='md:text-[38px] text-[28px] font-bold'>Gigsta</span>
    </div>
  )
}

export default Logo