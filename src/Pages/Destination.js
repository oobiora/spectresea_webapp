import React from 'react'
import {NavbarComponent} from '../Components/navbar'
import { DestinationSplashComponent } from '../Components/destination-splash'


export class Destination extends React.Component {
    constructor(props){
        super(props)
        
    }
    render () {
        return (   
            <div className="h-screen relative">
                <NavbarComponent></NavbarComponent>
                <DestinationSplashComponent />
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
