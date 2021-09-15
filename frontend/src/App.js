import "./style/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import ProfileScreen from "./screen/ProfileScreen";
import ModalComponent from "./components/ModalComponent";
import ModalPublic from "./components/ModalPublic";
import { Switch } from "@material-ui/core";
import LoadingBox from "./components/LoadingBox";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/publicStatus" component={ModalPublic}></Route>
      <Route path="/status/:id" component={ModalComponent}></Route>
      <Route path="/login">
        <LoginScreen></LoginScreen>
      </Route>
      <Route path="/profile/:id">
        <ProfileScreen></ProfileScreen>
      </Route>
      <Route path="/load" component={LoadingBox} exact></Route>
    </BrowserRouter>
  );
}

export default App;
