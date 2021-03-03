
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Landing from './components/Landing';

function App() {

  const userSign = useSelector(state => state.userSign)

  const { userData } =  userSign

  return (
      <>
        <Header />
        {
          userData ?
          <Home  /> 
          :
          <Landing />
        }

      </>
  );
}

export default App;
