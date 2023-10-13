import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./styles/style.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import BtnUp from "./components/btnUp/BtnUp";

import ScrollToTop from "./utils/scrollToTop";





function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Router>
                    <ScrollToTop/>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/project/:id" element={<Project/>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <BtnUp/>
                    <Footer/>
                </Router>
            </div>
        </div>
    );
}

export default App;