// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'react-scroll-parallax';
import 'swiper/swiper-bundle.css';
import { motion, useIsPresent } from 'framer-motion'
import React from 'react'
import {AdvancedImage, } from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/base";
import {fill} from "@cloudinary/base/actions/resize";


const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: .98, zIndex: 30 },
};

const imageVariants = {
  hover: { scale: 1.1 }
};

export function BoatPageComponent({title, video, gallery, captain, description }) {
    gallery= gallery
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dnjvlh5of'
        }, 
        url: {
            secure: true
        }
      });

    //   const { ScrollYProgress } = useViewportScroll()
    const isPresent = useIsPresent()
    const seed = Math.floor(Math.random() * Math.floor(gallery.length/2))
    let seed1 = Math.floor(Math.random() * (gallery.length - (seed)) + seed)

    let img1 = gallery[16]
    let img2 = gallery[17]
    console.log(img1, img2)
    

    
    return (
        <div className=" font-main mx-auto">
            <div className="text-center pt-10">
                <p className='tracking-widest pb-2'>Welcome Aboard</p>
                <h2 className='font-bold text-4xl'>{title.title}</h2>
                <div className='flex justify-center'>
                    <h3 className="flex text-3xl flex-shrink items-baseline ">{title.subtitle}<p className='text-sm'>{title.model}</p></h3>
                </div>
            </div>
            <Swiper
            className="mb-20"
            effect='coverflow'
            loop={true}
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
              }}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    
                    gallery.slice(13, 16).map(url => (
                        <SwiperSlide className='md:px-32 pt-6 mb-10'>
                            {/* <img className='' src={url}></img> */}
                            <AdvancedImage className='filter drop-shadow-xl' cldImg={cld.image(url.public_id)}/>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
            <div className='desktop:container desktop:mx-auto flex flex-row gap-x-11 my-20 px-3 xmobile:m-auto xmobile:mb-20'>
                <div className='grid grid-rows-2 flex-shrink justify-self-start gap-y-5 filter drop-shadow-xl xmobile:hidden'>
                    <Parallax className="col-start-2 col-span-2 filter drop-shadow-xl" y={[-40, 20]} tagOuter="figure">
                        {/* <img src={urls[1]} className='col-start-2 col-span-2 filter drop-shadow-xl' /> */}
                        {    gallery.slice(16,17).map(id => (

                            <AdvancedImage className='col-start-3 col-span-2 pb-2 filter drop-shadow-xl' cldImg={cld.image(id.public_id)}/>
                        ))
                        }
                    </Parallax>
                    <Parallax className='col-start-3 col-span-2 pb-2 filter drop-shadow-xl' y={[-40, 20]} tagOuter="figure">
                        {    gallery.slice(13,14).map(id => (

                        <AdvancedImage className='col-start-3 col-span-2 pb-2 filter drop-shadow-xl' cldImg={cld.image(id.public_id)}/>
                        ))
                        }
                        {/* <img src={urls[0]} className='col-start-3 col-span-2 pb-2 filter drop-shadow-xl'/> */}
                    </Parallax>
                </div>
                <div className='flex-grow xmobile:place-self-center xmobile:text-center xmobile:w-screen'>
                    <h1 className='font-bold text-3xl pb-4 text-center'>General Info<hr /></h1>
                    <p className="mx-10">{description}</p>
                </div>

            </div>
            <div className='bg-gray-900 pt-10 pb-10 flex justify-center '>
                <div className='flex-col content-center items-center flex text-lg'>
                    <h1 className='font-main text-3xl text-white '> Meet Your Crew </h1>
                    <div className='grid grid-flow-col text-center flex gap-3 place-items-center'>
                        {
                            captain.map(captain => (
                                <div className='object-contain mt-10 text-white text-3xl xmobile:text-2xl'>
                                    <motion.div whileHover={{scale: .98, y: 20}} style={{backgroundImage : `url(${captain.url})` }} className='flex-grow bg-contain xmobile:h-72 w-64 h-96 mb-3 xmobile:w-44' />


                                    <p>{captain.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <a href='https://53m2cs2jps8.typeform.com/to/x9xlKYJ1'>
                    <motion.button whileHover={{scale: 1.2, borderStyle: 'dotted', }} className='border border-white text-white rounded-sm py-2 px-3 mt-14'>
                        charter this vessel
                    </motion.button>
                    </a>
                </div>
            </div>
            <div className="">
                {/* <video className='h-96 w-screen object-cover' controls>
                    <source src='https://drive.google.com/file/d/1Cx12FGyG2vexE2qDfJ0CtGNN9w68XEA_/preview'/>
                </video> */}
                    
                    {/* <iframe className='w-screen h-96 object-cover' src={video} allow="autoplay"></iframe> */}
                    {console.log(`https://drive.google.com/uc?export=download&id=`+video)}
                    <video>
                        <source src={`https://drive.google.com/uc?export=download&id=`+video} type='video/mp4' />
                    </video>
            </div>
            <div className='mx-auto my-10'>
                    <h1 className='mobile:text-2xl desktop:text-4xl my-5 pb-3 text-center'>View Gallery</h1>
                    <motion.div className='flex grid grid-cols-4 xmobile:grid-cols-2 gap-2 p-auto overflow-hidden'
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                    >
                        { isPresent &&

                            gallery.slice(0, 12).map(id => 
                                (
                                    <motion.div
                                        variants={thumbnailVariants}
                                    >
                                        <motion.div
                                            className="frame"
                                            whileHover="hover"
                                            variants={frameVariants}
                                            transition={transition}
                                        >
                                            <motion.div
                                                variants={imageVariants}
                                                transition={transition}
                                            >
                                                <AdvancedImage className='filter drop-shadow-xl' cldImg={cld.image(id.public_id).resize(fill().width(350).height(350)) }/>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                )
                            )
                        }
                    </motion.div>
            </div>
        </div>
    )
}