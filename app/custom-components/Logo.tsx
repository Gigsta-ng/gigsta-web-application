import Image from 'next/image'
import React from 'react';
import assets from "../image"

const Logo = () => {
  return (
    <div className='flex gap-4 items-center'>
        <Image src={assets.icons.gigsta} alt='gigsta_logo' width={50} height={50} />
        <span className='text-[38px] font-bold'>Gigsta</span>
    </div>
  )
}

export default Logo