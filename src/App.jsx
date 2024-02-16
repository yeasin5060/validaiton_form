
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import firebaseConfig from "./Firebaseconfig/firebaseconfig";
import Main from "./Layout/Main/Main";
import Home from "./pages/Mainpages/Home/Home";
import Message from "./pages/Mainpages/Message/Message";
import Notivication from "./pages/Mainpages/Notivication/Notivication";
import Setting from "./pages/Mainpages/Setting/Setting";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <>
        <Route path="/" element = {<Login/>}/>
        <Route path="/sign" element = {<Signin/>}/>
        <Route element = {<Main/>}>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/message" element ={<Message/>}/>
            <Route path="/notivication" element ={<Notivication/>}/>
            <Route path="/setting" element ={<Setting/>}/>
        </Route>
     </>
    )
  );
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
