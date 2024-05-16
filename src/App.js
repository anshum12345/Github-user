import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import {Button} from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import Upload from './components/Upload';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App(){
  return (
    
    <Router>
      {/* <div>befuyhew</div>
      <Button colorScheme={'facebook'}>Click</Button> */}
     <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Videos" element={<Videos />} />
      <Route path="/Login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />

     

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
