import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {

  return (
    <Router>
      <Header />
      <Home />
    </Router>
  )
}

export default App