import {Routes , Route} from 'react-router-dom';
import {Container , Row , Col} from 'react-bootstrap';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute'
import { UserAuthContextProvider } from './Context/UserAuthContext';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';



function App() {
  return (
    <Container>

    <Row>
      <Col>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={
           <ProtectedRoute>
                {/* <Navbar/> */}
               <Home/>
           </ProtectedRoute>
          }/>
        </Routes>
      </UserAuthContextProvider>
      </Col>
    </Row>

    </Container> 
  )
}

export default App;
