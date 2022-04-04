import React, {useEffect, useState} from 'react'
//import Message from '../components/Message'
//import Loader from '../components/Loader'
import Process from '../components/Process'
import HomeCarousel from '../components/HomeCarousel'
import { Container } from 'react-bootstrap'
//import CurrencyConverter from '../components/CurrencyConverter'

const HomeScreen = () => {



    return (
        <>
            <Container>
                <HomeCarousel />
                     <h1 variant='success' className="text-center py-5" >
                        {/* <Badge variant="dark">How It Works</Badge> */}
                        Send Money Home Quickly
                    </h1>
                    <h3 variant='success' className="text-center py-3" >
                        {/* <Badge variant="dark">How It Works</Badge> */}
                        How It Works
                    </h3>
                    
                <Process />

                {/* <CurrencyConverter /> */}
                
            </Container>
           
        </>
    )
}

export default HomeScreen
