import './App.css';
import Dashboard from './layouts/Dashboard.jsx'
import 'semantic-ui-css/semantic.min.css';
import {Container} from "semantic-ui-react";
import Navi from './layouts/Navi.jsx';



function App() {
  return (
    <div className="App">
     <Container className="main">
       <Navi></Navi>
       <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
