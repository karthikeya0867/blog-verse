import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn'
import Home from './Components/Home';
import SignUp from './Components/SignUp'
import {Routes , Route, Link} from 'react-router-dom'
const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/'  element={<Home />} />
    </Routes>
    </>
  );
};

export default App;
