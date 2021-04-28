import React from 'react'
//import Message from '../components/Message'
//import Loader from '../components/Loader'
import Process from '../components/Process'
import HomeCarousel from '../components/HomeCarousel'
import { Container, Badge } from 'react-bootstrap'
import CurrencyConverter from '../components/CurrencyConverter'

const HomeScreen = () => {
    return (
        <>
            <Container>
                <HomeCarousel />
                    <h1 className="text-center py-5">
                        <Badge variant="dark">How It Works</Badge>
                    </h1>
                <Process />

                <CurrencyConverter />
                
            </Container>
           
        </>
    )
}

export default HomeScreen
