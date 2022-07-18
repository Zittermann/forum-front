import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import ArgentinaBoard from "./views/ArgentinaBoard";
import TechBoard from "./views/TechBoard";
import ErrorPage from "./views/ErrorPage";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">

        <Router>

            <Nav fill variant="tabs">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/ar">Argentina</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/t">Tech</Nav.Link>
                </Nav.Item>
            </Nav>

            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/ar"} element={<ArgentinaBoard />} />
                <Route path={"/t"} element={<TechBoard />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
