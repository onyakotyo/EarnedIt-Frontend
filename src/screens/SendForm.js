import React,{useEffect} from 'react'
import { Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import CountrySelector from '../components/CountrySelector'
import CurrencyConverter from '../components/CurrencyConverter'
//import SendCostModal from '../components/SendCostModal'


const SendForm = ({location, history}) => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo} = userLogin

    console.log('USERINFO', userInfo.email)

    const redirect = location.search ? location.search.split('=')[1] : '/login'

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])

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


                <LinkContainer 
               
                    to={!userInfo ? `/login?redirect=${redirect}` : '/collectionmethod'}
                >
                    <Button variant="dark" size="md" block>
                        Please choose money collection method
                    </Button>
                </LinkContainer>

                
                
            </Container>


           
        </>
    )
}

export default SendForm
