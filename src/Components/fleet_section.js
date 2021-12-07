import * as React from 'react';
import { motion } from 'framer-motion'

export function FleetSectionComponent ({title, type, description, url, specs}) {
    specs = specs
    console.log(typeof specs)
    console.log(specs)
    return (
        <motion.button initial={{ opacity: 0}} animate={{opacity: 1}} whileTap={{ scale: 5, opacity: 0}} className='flex grid grid-flow-col flex-grow bg-red-400 bg-cover mobile:bg-center  desktop:bg-set w-full rounded-lg' style={{ backgroundImage : `url(${url})`}} whileHover={{ scale: 1.05}}>
            <div className='flex flex-col text-white font-main ml-5 mt-10 py-10 '>
                <h1 className='flex-grow-0 text-white desktop:text-5xl mobile:text-3xl text-left font-bold ' >{title}</h1>
                <p className='flex-grow-0 text-2xl text-left'>{type}</p>
                <div className='flex-grow '/>
                <div class='grid grid-flow-col flex flex-none mt-20 '>
                    <ul className='grid grid-flow-row auto-row-auto align-left flex-shrink group max-w-min'>
                        <p  className='smallscreens:text-xl largescreens:text-3xl text-left group-hover:visible '>Specs</p>
                        { specs.map(spec => (
                            <li className='text-left  group-hover:visible invisible backdrop-filter backdrop-blur-lg'>{spec}</li>
                        ))}
                    </ul>
                    <div className='flex-grow'/>
                </div>
            </div>
            <div className='flex flex-wrap text-white font-bold mx-auto my-auto flex-shrink'>
                <p className='desktop:text-3xl mobile:text-base text-left'>{description}</p>
            </div>
        </motion.button>
    )
}