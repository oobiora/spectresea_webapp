import React from 'react'
import {NavbarComponent} from '../Components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export class Landing extends React.Component {
    constructor(props){
        super(props)
        
    }
    render () {
        return (   
            <div className="h-screen relative">
                <NavbarComponent></NavbarComponent>
                <video className='absolute z-10 top-0 largescreens:object-fill h-screen w-screen smallscreens:object-cover ' autoPlay muted loop preload='auto'>
                    <source src='https://res.cloudinary.com/dnjvlh5of/video/upload/v1625618206/SpectreAssets/landing/landing-video_awfqk6.mp4'  type='video/mp4' />
                </video>
                <div className='absolute z-30 w-1/3 h-1/6 text-white font-main text-center text-sm flex flex-col items-center justify-end smallscreens:hidden'>
                    <h1 className='font-bold space-x-1'><FontAwesomeIcon size='xs' icon={faAnchor} /> 88 Sanlorenzo</h1>
                    <p className='text-xs'>88 feet</p>
                    <p className='text-xs'>4 cabins</p>
                </div>
                <Link to='/fleet'>
                    <button className='z-30 absolute w-screen mx-auto h-2/4 bottom-0 font-main text-3xl text-white'>
                        <p className='mr-1'>Explore Fleet</p>
                        <FontAwesomeIcon size='xs' icon={faAnchor} />
                    </button>
                </Link>
                <div className="bottom-0 z-30 absolute mx-auto md:px-5 md:text-sm w-screen px-2">
                    <h1 className="w-full text-xs text-gray-300 font-main">copyright 2021 Spectre Consulting Group LLC All Rights Reserved</h1>
                </div> 
            </div>
        )
    }
}




// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
