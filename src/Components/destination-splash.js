import * as React from 'react';
import { motion } from "framer-motion"
import { AnimateSharedLayout } from "framer-motion"
import { useState } from 'react'


function MainSplashComponent(props) {
    const [active, setActive] = useState({name: 'bahamas', url: 'https://res.cloudinary.com/dnjvlh5of/image/upload/v1625618236/SpectreAssets/destinations/d_bahamas_savknl.jpg'})
    const [list, setList] = useState([{name: 'Miami Beach', url: 'https://res.cloudinary.com/dnjvlh5of/image/upload/v1625618236/SpectreAssets/destinations/d_miami_eftlzj.jpg'}, {name: 'Hamptons', url: 'https://res.cloudinary.com/dnjvlh5of/image/upload/v1625618237/SpectreAssets/destinations/d_hamptons_kak8ql.jpg'}, {name: 'Florida Keys', url: 'https://res.cloudinary.com/dnjvlh5of/image/upload/v1625618236/SpectreAssets/destinations/d_keys_zyotax.jpg'}])
    function testAction(newActive) {
        setActive(newActive)
        list.splice(list.indexOf(newActive), 1)
        list.push(active)
        setActive(newActive)
    }
    return (

        <AnimateSharedLayout >
            <motion.div className='flex flex-col-reverse flex-grow bg-cover bg-center' layout='true' style={{ backgroundImage: `url(${active.url})` }}>
                <div>
                    <p className=' font-main desktop:text-8xl mobile:text-6xl text-white '>{active.name}</p>
                </div>
                <div className='flex-grow'></div>
                <p className=' font-main desktop:text-2xl text-white place-self-center my-16'>Destination</p>
            </motion.div>
            <NavigationBar items={list} navigationAction={testAction}/>
            
        </AnimateSharedLayout>
    )
}

function NavigationBar({items, navigationAction}) {
    let list=items

    return (
            <div layout='true' className='flex-none grid grid-cols-3 overflow-x-hidden h-1/4'>
                {list.map(item => (
                    <GridItem content={item} childAction={navigationAction}/>
                ))}
            </div>
    )
}

function GridItem({content, childAction}){
    function activateFunction(){
        childAction(content)
    }
    return (
        <motion.button 
        layout
        style={{ filter: "invert(.1)", backgroundImage: `url(${content.url})`}}
        whileHover={{ filter: "invert(0)"}}
        className='w-full bg-cover bg-center'
        onClick={activateFunction}
        >
            <p className='font-bold text-white text-xl'>{content.name}</p>
        </motion.button>
    )
}

export function DestinationSplashComponent(props) {
    return (
        <div className='fixed flex flex-col h-full w-screen top-0 bg-black'>
            <MainSplashComponent />
        </div>
        // <div className='fixed z-10 top-0 h-full w-screen'>
        //     <img class=' h-screen w-screen object-cover' src='/images/d_miami.jpg'/>
        //     <div className=' z-20 bottom-0 h-full w-screen bg-red-400'>
        //         <p>test</p>
        //         <div className='w-screen justify-center grid grid-cols-3 h-1/3 bottom-0' >
        //             <button class='bg-gray-300 h-2/4 hover:h-3/4 self-end transition-all duration-150 ease-in bg-opacity-60' >
        //                     left
        //             </button>
        //             <button class='bg-gray-400 h-2/4 hover:h-3/4 self-end transition-all duration-150 ease-in bg-opacity-60'>
        //                     middle
        //             </button>
        //             <button class='bg-gray-500 h-2/4 hover:h-3/4 self-end transition-all duration-150 ease-in bg-opacity-60'>
        //                     right
        //             </button>
        //         </div>
        //     </div>
            
        // </div>
    )
}


