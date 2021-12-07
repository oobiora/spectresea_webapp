import * as React from "react"
import {Link} from 'react-router-dom'
import {motion, AnimateSharedLayout} from 'framer-motion'
import {BiMenuAltRight} from 'react-icons/bi'
import {BsHash} from 'react-icons/bs'
import { IoLogoInstagram } from 'react-icons/io'
import { IconContext } from 'react-icons'
import {useState} from 'react'
export function NavbarComponent() {
  const [menu, setMenu] = useState(false)
  if (menu) {
    console.log("Show")
  }
  if (!menu) {
    console.log('hidden')
  }

  function onClick() {
    setMenu(!menu)
  }

  const container = {
    hidden: { 
      opacity: 0,
      transition : { 
        staggerChildren: 0.3
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <motion.div className='top-0 sticky z-30 bg-white bg-opacity-10 backdrop-blur-lg'>
    <nav className='sticky z-30 flex m-0 w-screen px-2 pt-2 border-b border-white overflow-hidden '>
      <div className='min-w-min min-h-min'>
        <Link to='/' >
          <img className='object-contain h-10 hover:animate-pulse cursor-pointer' src='https://res.cloudinary.com/dnjvlh5of/image/upload/v1625618235/SpectreAssets/logos/SpectreLogoWhite_bgxppk.png'></img>
        </Link>
      </div>
      <div className='flex-grow'></div>
      <div className='flex desktop:hidden'>
        <IconContext.Provider value={{ color: 'white', size: '2em'}}>
          <button onClick={onClick}>
            <BiMenuAltRight ></BiMenuAltRight>
          </button>
        </ IconContext.Provider>
      </div>
      <div className='flex flex-row mobile:hidden '>
        <button className='flex flex-shrink flex-col w-full h-full '>
          <Link to='/fleet' className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-white'>Fleet</p>
            </div>
            <div className='border-l border-white flex-shrink h-full px-24'></div>
          </Link>
        </button>
        <button className='flex flex-shrink flex-col w-full h-full '>
          <Link to='/destination' className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-white'>Destination</p>
            </div>
            <div className='border-l border-white flex-shrink h-full px-24'></div>
          </Link>
        </button>
        <button className='flex flex-shrink flex-col w-full h-full'>
          <Link to='lifestyle' className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-white'>Lifestyle</p>
            </div>
            <div className='border-l border-white flex-shrink h-full px-24'></div>
          </Link>
        </button>
        <a href='https://53m2cs2jps8.typeform.com/to/x9xlKYJ1' className='flex flex-shrink flex-col w-full h-full text-center'>
          <div className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-white'>Inquire</p>
            </div>
            <div className='border-l border-r mr-2 border-white flex-shrink h-full px-16'></div>
          </div>
        </a>
        <IconContext.Provider value={{ color: 'white', size: '2em'}}>
          <a href='https://www.instagram.com/spectre.sea/' className='my-auto'>
            <IoLogoInstagram ></IoLogoInstagram>
          </a>
        </ IconContext.Provider>
      </div>
    </nav>
    {menu && 
    <AnimateSharedLayout>
      <motion.nav className='sticky z-30 flex w-1/3 grid grid-flow-row float-right desktop:hidden'
        variants={container}
        initial="hidden"
        animate="show">
        <motion.button variants={item} whileHover={{scale: 1.2}}>
          <Link to='/fleet' className="grid-flow-col grid-rows-2 group">
              <div >
                <p className='object-bottom relative font-bold text-sm text-white py-4 bg-gray-200 bg-opacity-10 hover:ring-2 ring-white'>Fleet</p>
              </div>
          </Link>
        </motion.button>
        <motion.button variants={item} whileHover={{scale: 1.2}}>
          <Link to='/destination' className="grid-flow-col grid-rows-2 group">
              <div >
                <p className='object-bottom relative font-bold text-sm text-white py-4 bg-gray-200 bg-opacity-10 hover:ring-2 ring-white'>destination</p>
              </div>
          </Link>
        </motion.button>
        <motion.button variants={item} whileHover={{scale: 1.2}}>
          <Link to='/lifestyle' className="grid-flow-col grid-rows-2 group">
              <div >
                <p className='object-bottom relative font-bold text-sm text-white py-4 bg-gray-200 bg-opacity-10 hover:ring-2 ring-white'>lifestyle</p>
              </div>
          </Link>
        </motion.button>
        
        
      </motion.nav>
    </AnimateSharedLayout>
    } 
    </motion.div>
  )
}


export function DarkNavbarComponent() {
  const [menu, setMenu] = useState(false)
  if (menu) {
    console.log("Show")
  }
  if (!menu) {
    console.log('hidden')
  }

  function onClick() {
    setMenu(!menu)
  }

  const container = {
    hidden: { 
      opacity: 0,
      transition : { 
        staggerChildren: 0.3
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <motion.div className='top-0 sticky z-30 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg'>
    <nav className='sticky top-0 z-30 flex m-0 w-screen px-2 pt-2 border-b border-black overflow-hidden  '>
      <div className='min-w-min min-h-min'>
        <Link to='/'>
          <img className='object-contain h-10 hover:animate-pulse cursor-pointer' src='https://res.cloudinary.com/dnjvlh5of/image/upload/v1625618234/SpectreAssets/logos/SpectreLogo_dh1mnp.png'></img>
        </Link>
      </div>
      <div className='flex-grow'></div>
      <div className='flex desktop:hidden'>
        <IconContext.Provider value={{ color: 'black', size: '2em'}}>
          <button onClick={onClick}>
            <BiMenuAltRight ></BiMenuAltRight>
          </button>
        </ IconContext.Provider>
      </div>
      <div className='flex flex-row mobile:hidden'>
        <button className='flex flex-shrink flex-col w-full h-full '>
          <Link to='/fleet' className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-black'>Fleet</p>
            </div>
            <div className='border-l border-black flex-shrink h-full px-24'></div>
          </Link>
        </button>
        <button className='flex flex-shrink flex-col w-full h-full '>
          <Link to='/destination' className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-black'>Destination</p>
            </div>
            <div className='border-l border-black flex-shrink h-full px-24'></div>
          </Link>
        </button>
        <button className='flex flex-shrink flex-col w-full h-full'>
          <Link to='/lifestyle' className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-black'>Lifestyle</p>
            </div>
            <div className='border-l border-black flex-shrink h-full px-24'></div>
          </Link>
        </button>
        <a href='https://53m2cs2jps8.typeform.com/to/x9xlKYJ1' className='flex flex-shrink flex-col w-full h-full text-center'>
          <div className="grid-flow-col grid-rows-2 group">
            <div >
              <p className='object-bottom relative -bottom-2 font-bold text-sm motion-safe:group-hover:animate-bounce text-black'>Inquire</p>
            </div>
            <div className='border-l border-r mr-2 border-black flex-shrink h-full px-16'></div>
          </div>
        </a>
        <IconContext.Provider value={{ color: 'black', size: '2em'}}>
          <a href='https://www.instagram.com/spectre.sea/' className='my-auto'>
            <IoLogoInstagram ></IoLogoInstagram>
          </a>
        </ IconContext.Provider>
      </div>
    </nav>
    {menu && 
    <AnimateSharedLayout>
      <motion.nav className='sticky z-30 flex w-1/3 grid grid-flow-row float-right desktop:hidden '
        variants={container}
        initial="hidden"
        animate="show">
        <motion.button variants={item} whileHover={{scale: 1.2}}>
          <Link to='/fleet' className="grid-flow-col grid-rows-2 group ">
              <div className=''>
                <p className='object-bottom relative font-bold text-sm text-black py-4 bg-gray-200 bg-opacity-10 hover:ring-2 ring-black '>Fleet</p>
              </div>
          </Link>
        </motion.button>
        <motion.button variants={item} whileHover={{scale: 1.2}}>
          <Link to='/destination' className="grid-flow-col grid-rows-2 group">
              <div >
                <p className='object-bottom relative font-bold text-sm text-black py-4 bg-gray-200 bg-opacity-10 hover:ring-2 ring-black'>destination</p>
              </div>
          </Link>
        </motion.button>
        <motion.button variants={item} whileHover={{scale: 1.2}}>
          <Link to='/lifestyle' className="grid-flow-col grid-rows-2 group">
              <div >
                <p className='object-bottom relative font-bold text-sm text-black py-4 bg-gray-200 bg-opacity-10 hover:ring-2 ring-black'>lifestyle</p>
              </div>
          </Link>
        </motion.button>
        
        
      </motion.nav>
    </AnimateSharedLayout>
    } 
    </motion.div>
  )
}