import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import TransitionRoutes from './Components/Router/TransitionRoutes';

const App = (props) => {
  return (
    <Router>
      <HttpsRedirect>
        <TransitionRoutes/>
      </HttpsRedirect>
    </Router>
  )
}

export default App;
