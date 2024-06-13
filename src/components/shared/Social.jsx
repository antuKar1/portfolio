import React from 'react'
import fb from "../../assets/fb.png"
import linkedin from "../../assets/linkedin.png"
import whatsapp from "../../assets/whatsapp (1).png"
const Social = () => {
  return (
    <div className='flex justify-center gap-4'>
      <a href="https://www.facebook.com/profile.php?id=100075716779242"><img className='w-8' src={fb} alt="" /></a>
      <a href="https://wa.me/8801705516339"><img className='w-8' src={whatsapp} alt="" /></a>
      <a href=""><img className='w-8' src={linkedin} alt="" /></a>
    </div>
  )
}

export default Social
