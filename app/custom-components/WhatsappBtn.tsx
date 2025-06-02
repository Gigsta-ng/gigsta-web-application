"use client";

import { MdWhatsapp } from "react-icons/md";

const WhatsappBtn = () => {
  return (
    <button className="rounded-full p-1">
        <MdWhatsapp size={50} className="fill-accent-yellow fixed bg-white border border-accent-yellow backdrop-blur-md rounded-full p-1 right-2 md:right-6 bottom-[20%]" />
    </button>
  )
}

export default WhatsappBtn