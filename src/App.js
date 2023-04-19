
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"
import Footer from "./Componenets/Footer";
import Contact from "./Componenets/Contact"
import Services from "./Componenets/Services";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/contact" element = {<Contact/>} />
      <Route path = "/services" element = {<Services/>} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
