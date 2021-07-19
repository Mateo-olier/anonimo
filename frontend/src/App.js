import "./style/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ModalComponent from "./components/ModalComponent";
import ModalPublic from "./components/ModalPublic";
function App() {
  return (
    <BrowserRouter>
      <Route path="/publicStatus" component={ModalPublic}></Route>
      <Route path="/status/:id" component={ModalComponent}></Route>
      <Route path="/" component={HomeScreen}></Route>
    </BrowserRouter>
  );
}

export default App;
