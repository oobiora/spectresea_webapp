import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import {DarkNavbarComponent} from '../Components/navbar'
import { BoatPageComponent } from '../Components/boat_page'
import { withRouter } from 'react-router-dom'

import SwiperCore, {Navigation, EffectCube, EffectCoverflow, Autoplay} from 'swiper'
import axios from 'axios'
SwiperCore.use([EffectCube, EffectCoverflow, Navigation, Autoplay])


class BoatPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gallery: [{nul: '1', public_id: "SpectreAssets/sx88/sx88gallery-12"}, {nul: '2', public_id: "SpectreAssets/sx88/sx88gallery-12"}],
            sanlorenzo: {title: 'No Time to Die', subtitle: 'Sanlorenzo', model: 'sx88'},
            vanquish: {title: 'Money Penny', subtitle: 'Vanquish', model: 'vq40'},
            vqcaptain: [{name: 'Captain Angel', url: 'https://res.cloudinary.com/dnjvlh5of/image/upload/c_scale,w_487/v1625719163/SpectreAssets/captain/VQ_Captain_20_r6xhrd.jpg'}],
            sxcaptain: [{name: 'Captain Kaj', url: 'https://via.placeholder.com/200x300'}, {name: 'first mate pat', url: 'https://via.placeholder.com/200x300'}],
            vqvideo : '1Cx12FGyG2vexE2qDfJ0CtGNN9w68XEA_',
            sxvideo : "1y6BjXcttL2eNoKYg5CkKAqPEaNEYt7UJ",
            vqdescription: 'Designed to move guests from point A to point B in the highest possible level of comfort and efficiency. Powered by three Mercury 450R’s the VQ40 can achieve speeds up to 56 knots. When stationed in Miami guests can shoot down to the Keys for the afternoon. From the Hamptons guests have access to hotspots such as: Sunset Beach, Navy Beach, and Duryeas. Or they can venture further to Block Island for a laid back vibe.', 
            sxdescription: 'The swiss-army knife of the sea. This multi-functional crossover yacht offers the luxurious interior of a traditional motor yacht while capitalizing on the waterfront with the aft deck. The articulating aft deck or, “beach club”, affords guests direct access to the water: providing the feeling of a day at the beach. This blend targets a more active demographic. The salon is wrapped in nearly floor to ceiling glass connecting the interior of the yacht to the sea. The open floorplan seamlessly connects the galley to the salon in turn providing a more social and integrated experience for guests.'

    }
        
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        axios.get(`https://res.cloudinary.com/dnjvlh5of/image/list/${id}.json`).then((res) => {
            this.setState({gallery: res.data.resources})
        })
    }

    
    render () {
        return (   
            <div className="">
                <ParallaxProvider>
                    <DarkNavbarComponent />
                    <BoatPageComponent gallery={this.state.gallery} title={this.props.match.params.id === 'vanquish' ? this.state.vanquish : this.state.sanlorenzo} captain={this.props.match.params.id === 'vanquish' ? this.state.vqcaptain : this.state.sxcaptain} video={this.props.match.params.id === 'vanquish' ? this.state.vqvideo : this.state.sxvideo} description={this.props.match.params.id === 'vanquish' ? this.state.vqdescription : this.state.sxdescription}/>
                </ParallaxProvider>
            </div>
        )
    }
}

export default withRouter(BoatPage)




// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
