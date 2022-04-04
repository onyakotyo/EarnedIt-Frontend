import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SendForm from './screens/SendForm'
import SendCostModal from './components/SendCostModal'
import CollectionMethod from './screens/CollectionMethod'
import RecepientScreen from './screens/RecepientScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import PickupPoints from './screens/PickupPoints'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import CheckOut from './screens/CheckoutScreen/CheckOut'
import Success from './screens/CheckoutScreen/Success'
import Cancelled from './screens/CheckoutScreen/Cancelled'
import ProfileScreen from './screens/ProfileScreen'
import OrderMyListScreen from './screens/OrderMyListScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import PayOutScreen from './screens/PayOutScreen'

const App = () => {
  return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            
            <Route path='/' component={HomeScreen} exact />
            <Route path='/send' component={SendForm} />
            <Route path='/send/sendcost' component={SendCostModal} />
            <Route path='/collectionmethod' component={CollectionMethod} />
            <Route path='/recepient' component={RecepientScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/collectionmethod/pickuplocations' component={PickupPoints} />
            <Route path='/orderSummary' component={PlaceOrderScreen} />
            <Route path='/checkout' component={CheckOut} />
            <Route path='/success' component={Success} />
            <Route path='/cancelled' component={Cancelled} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/orderMylist' component={OrderMyListScreen} />
            <Route path='/orderlist' component={OrderListScreen} />
            <Route path='/userlist' component={UserListScreen} />
            <Route path='/user/:id/edit' component={UserEditScreen} />
            <Route path='/payout/:id' component={PayOutScreen} />
           
          </Container>
        </main>
      <Footer />
      </Router>
      
  );
}

export default App;
