import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: '50%, 50%'
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true)
            this.kill()
          }
        }
      })
  }, [])

  return (
    <>
      <div className='svg flex item-center justify-center fixed top-0 left-o z-[100] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {
        showContent && <div className='main w-full' >
          <div className='landing w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
              <div className='logo flex gap-5'>
                <div className='lines flex flex-col gap-[4px]'>
                  <div className='line w-12 h-[6px] bg-white'></div>
                  <div className='line w-8 h-[6px] bg-white'></div>
                  <div className='line w-5 h-[6px] bg-white'></div>

                </div>
                <h3 className='text-3xl -mt-[8px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>

            <div className='imagesdiv relative w-full h-screen overflow-hidden'>
              <img className='absolute top-0 left-0 w-full h-full object-cover' src='/sky.png' alt='sky' />
              <img className='absolute top-0 left-0 w-full h-full object-cover' src='/bg.png' alt='background' />
              <div className='text text-white flex flex-col gap-2 absolute top-8 left-1/2 -translate-x-1/2'>
                <h1 className='text-[5.5rem] leading-none -ml-36' >grand</h1>
                <h1 className='text-[5.5rem] leading-none -ml-18'>theft</h1>
                <h1 className='text-[5.5rem] leading-none -ml-36'>auto</h1>
              </div>
              <img className='character absolute w-[20%] h-[60%] bottom-[-10%] left-1/2 -translate-x-1/2 scale-[2]' src='/girlbg.png' alt='girl' />
              
              <div className='btmbar text-white absolute bottom-0 left-0 w-full py-8 px-6 bg-gradient-to-t from-black to transfparent'>
                <div className='flex gap-2 items-center'>
                  <i className="text-3xl ri-arrow-down-line items-center"></i>
                  <h3 className='text-xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
                </div>
                <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 h-[45px]' src='./ps5.png' alt='ps5' />
              </div>

            </div>

          </div>

        </div>
      }
    </>
  )
}

export default App