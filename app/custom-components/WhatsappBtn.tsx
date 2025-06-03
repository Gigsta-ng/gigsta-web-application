"use client";

import { MdWhatsapp } from "react-icons/md";

const WhatsappBtn = () => {
  return (
    <button className="rounded-full p-1">
        <MdWhatsapp size={55} className="fill-green-500 animate-bounce delay-1000 fixed bg-white backdrop-blur-md rounded-full p-1 hover:animate-none transition-all right-2 md:right-6 bottom-[10%]" />
    </button>
  )
}

export default WhatsappBtn