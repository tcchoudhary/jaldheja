import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

// css
import "./assets/css/style.scss"

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ScrollToTop from './components/ScrollToTop.js';
// Pages

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import TenderGrid from "./pages/products/TenderGrid.jsx";

const RoutePage = () => {
    const location = useLocation();

    return (
        <>
            <Router>
                <Suspense fallback={<div></div>}>
                    <Header />
                </Suspense>
                <ScrollToTop />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route index path='/' element={<Home />} />
                        <Route path='/about-us' element={<About />} />
                        <Route path='/careers' element={<Careers />} />
                        <Route path='/contact-us' element={<Contact />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='products/tender-grid' element={<TenderGrid />} />
                    </Routes>
                </AnimatePresence>
                <Suspense fallback={<div></div>}>
                    <Footer />
                </Suspense>
            </Router>
        </>
    );
};

export default RoutePage;
