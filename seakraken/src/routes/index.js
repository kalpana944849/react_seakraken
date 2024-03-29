import React from "react";
import { Routes as BrowserRouter, Route } from 'react-router-dom';
import Home from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../pages/contact";
import About from "../pages/about";
import Projects from "../pages/projects";


const Routes = () => {
    return (
        <>
            <Header />
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer />
        </>
        // <>
        //     {/* <BrowserRouter> */}
        //         <Home />
        //         <About />
        //         <Projects />
        //         <Contact />
        //     {/* </BrowserRouter> */}
        // </>
    );
}
export default Routes;