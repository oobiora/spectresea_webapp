import React from 'react'
import { DarkNavbarComponent } from '../Components/navbar'
import { FleetSectionComponent } from '../Components/fleet_section'
import { Link } from 'react-router-dom'

export class Fleet extends React.Component {
    constructor(props){
        super(props)
        
    }
    render () {
        let specs = {sx88 : ["length: 88'", 'guests: 12', 'cabins: 4', 'manufacturer: sanlorenzo', 'model: sx88', 'year 2020'],
                    vq40 : ["length: 40'", 'guests: 12', 'cabin: 1', 'manufacturer: vanquish', 'model: vq40', 'year: 2021']}
        let description = {sx88: '', vq40: ''}
        return (   
            <div className="h-max">
                <DarkNavbarComponent />
                <h1 className='font-main text-2xl text-center pt-2'>Fleet</h1>
                <div className='flex grid grid-flow-row w-screen h-full flex-row space-y-10 my-10 mb-10 px-10'>
                    <Link to='/fleet/vanquish'>
                        <FleetSectionComponent title={'Money Penny'} type={'Vanquish VQ40'} specs={specs.vq40} description={description.vq40} url='https://res.cloudinary.com/dnjvlh5of/image/upload/v1625701137/SpectreAssets/fleet/vq_fleet_pic_midm6h.jpg'/>
                    </Link>
                    <Link to='/fleet/sanlorenzo'>
                        <FleetSectionComponent title={'No Time to Die'} type={'San Lorenzo SX88'} specs={(specs.sx88)} description={description.sx88} url='https://res.cloudinary.com/dnjvlh5of/image/upload/v1627942107/SpectreAssets/sx88/IMG_0263_dez0fe.jpg'/>
                    </Link>
                </div>
                <div className="z-30 absolute mx-auto md:px-5 md:text-sm w-screen px-2">
                    <h1 className="w-full text-xs text-black font-main">copyright 2021 Spectre Consulting Group LLC All Rights Reserved</h1>
                </div> 
            </div>
        )
    }
}




// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
