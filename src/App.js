/*
import logo from './logo.svg';
import './App.css';
*/
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Shop} from './components/Shop';
import { ContextProvider } from './context';

function App() {
  console.log("App started")
  return (
    <>
      <Header />
        <ContextProvider>
          <Shop />
        </ContextProvider>
        
      <Footer /> 
    </>
  );
}

export default App;