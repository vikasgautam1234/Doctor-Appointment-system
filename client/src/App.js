import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";               // with the help of it we will get the loading state
import Spinner from "./components/Spinner";

function App() {
  const loading = useSelector((state) => state.alerts)  //with the help of the state we can target the reducer
  return (   
    <>   
    <BrowserRouter>
    {loading && <Spinner/>}    
    <Routes>
      <Route path = "/" element= {<HomePage/>} />
      <Route path="/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
