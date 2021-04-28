import React from 'react'
import { Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CountrySelector from '../components/CountrySelector'
import CurrencyConverter from '../components/CurrencyConverter'
//import SendCostModal from '../components/SendCostModal'


const SendForm = () => {
    return (
        <>
            <Container>
                    <div>
                        <h4 className="py-3 " variant="dark">
                            Select below which country to send money to
                        </h4>
                    </div>
                

                <CountrySelector />

                <CurrencyConverter />

                <LinkContainer to='/collectionmethod'>
                    <Button variant="dark" size="md" block>
                        Please choose money collection method
                    </Button>
                </LinkContainer>

                
                
            </Container>


           
        </>
    )
}

export default SendForm
