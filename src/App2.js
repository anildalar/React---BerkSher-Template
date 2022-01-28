import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import App from './App'
import Error404 from './Pages/Error404';
import Login from './Pages/Login';
import Register from './Pages/Register';

//RFC

function App2() {
  //1. State/Hook Variable

  //2. Functions

  //3. return JSX
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <App />}   />
            <Route path="/login" element={ <Login /> }   />
            <Route path="/register" element={ <Register /> }   />
            <Route path="*" element={ <Error404 /> }   />
        </Routes>
    </Router>
  );
}

export default App2;
