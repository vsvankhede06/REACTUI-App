
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import Footer from "./Componenets/Footer";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>}>
      </Route>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
