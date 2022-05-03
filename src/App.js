import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from "./context/ProtectedRoute";
import PreferenceForm from "./components/PreferenceForm";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/signup" element = {<Signup />} />
            <Route path = "/preference" element = {<ProtectedRoute> <PreferenceForm /> </ProtectedRoute>} />  
            <Route path="/forgotPassword" element={ <ForgotPassword /> } />         
          </Routes>
        </UserAuthContextProvider> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;