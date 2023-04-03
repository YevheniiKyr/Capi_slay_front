import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import NavBar from "./Components/NavBar";

function App() {




  return (
      <BrowserRouter>

          <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  );
}


export default App;
