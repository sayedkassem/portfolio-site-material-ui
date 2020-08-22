import React from 'react'
import Navbar from './Navbar'
import Header from "./Header"
import Particles from 'react-particles-js'




const Home =() =>{


    return (
        <div>
            
            <Navbar/>
            <Header/>
            <Particles
                    params={{
                        particles:{
                            number:{
                                value:50,
                                density:{
                                    enable: true,
                                    value_area: 500, 
                                }
                            },
                            shape:{
                                type: "circle",
                                stroke:{
                                    width:1,
                                }
                            },
                            size:{
                                value:4,
                                random: true,
                                anim:{
                                    enable:true,
                                    speed: 6,
                                    size_min:0.1,
                                    sync: true,
                                }

                            },opacity:{
                                value: .3,
                                random:true,
                                animation:{
                                    enable:true,
                                    speed:1,
                                    opacity_min:0.1,
                                    sync:true,
                                }

                            }
                        }
                    }}
            />
        </div>
    )
}
export default Home;
