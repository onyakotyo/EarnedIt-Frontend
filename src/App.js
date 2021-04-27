import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SendForm from './screens/SendForm'
import SendCostModal from './components/SendCostModal'
import CollectionMethod from './screens/CollectionMethod'

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
          </Container>
        </main>
      <Footer />
      </Router>
      
  );
}

export default App;
