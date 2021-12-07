import React from 'react'
import {DarkNavbarComponent} from '../Components/navbar'
import { motion } from 'framer-motion'

export class Lifestyle extends React.Component {
    constructor(props){
        super(props)
        
    }
    render () {
        return (   
            <div>
                <DarkNavbarComponent></DarkNavbarComponent>
                <h1 className='font-main text-2xl text-center pt-2'>Lifestlye</h1>
                <motion.div className='flex grid-col flex-col content-evenly' initial={{ opacity: 0, scale: 2}} animate={{opacity: 1, scale: 1}}>
                    <div className='self-center my-52 mb-10'>
                        <h1 className='font-bold text-xl pt-2 text-left md:ml-80 ml-2'>Refined Sophistication</h1>
                        <p className="font-main md:text-xl md:mx-80 text-xs mx-2">we offer the most discerning clients access to the preeminent fleet of vessels. affording them distinction in the most distinctful environments</p>
                    </div>
                </motion.div>
                <div className="bottom-0 z-30 absolute mx-auto md:px-5 md:text-sm w-screen px-2">
                    <h1 className="w-full text-xs text-black font-main">copyright 2021 Spectre Consulting Group LLC All Rights Reserved</h1>
                </div> 
            </div>
        )
    }
}




// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
