import React, { useEffect, Fragment, useState } from 'react'
import "./style/App.css";
import { BrowserRouter, Route,Redirect } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import ProfileScreen from "./screen/ProfileScreen";
import ModalComponent from "./components/ModalComponent";
import ModalPublic from "./components/ModalPublic";
import { Switch } from "@material-ui/core";
import LoadingBox from "./components/LoadingBox";




function App() {
  const [time,setTime] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(false)
    }, 4000);
    return () => {
      clearTimeout(timer);
    }


  }, []);


  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Fragment>
          {
            time ? <LoadingBox/> : <Redirect to="/home"/>
          }
          
        </Fragment>
      </Route>
      <Route path="/home" component={HomeScreen}></Route>
      <Route path="/publicStatus" component={ModalPublic}></Route>
      <Route path="/status/:id" component={ModalComponent}></Route>
      <Route path="/login">
        <LoginScreen></LoginScreen>
      </Route>
      <Route path="/profile/:id">
        <ProfileScreen></ProfileScreen>
      </Route>

    </BrowserRouter>

  );
}

export default App;
