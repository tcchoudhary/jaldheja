import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import pageTransition from './components/pageTransition';

import { ToastContainer } from 'react-toastify';
import CanonicalTag from '../src/components/CanonicalTag.jsx'

// css
import "./assets/css/style.scss"
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop.js';
// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import PageNotFound from './pages/notfound.jsx'
import product from './pages/product.jsx'
const App = () => {
    const location = useLocation();

    return (
        <>
            <ToastContainer position="bottom-center" autoClose={1500} />
            <Suspense fallback={<div></div>}>
                <Header />
            </Suspense>
            <ScrollToTop />
            <CanonicalTag /> {/* Add CanonicalTag here */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index path='/' element={pageTransition(Home)} />
                    <Route path='/about-us' element={pageTransition(About)} />
                    <Route path='/product' element={pageTransition(product)} />
                    <Route path='/contact-us' element={pageTransition(Contact)} />
                    <Route path='/careers' element={pageTransition(Careers)} />
                    <Route path='/services' element={pageTransition(Services)} />
                    <Route path='*' element={pageTransition(PageNotFound)} />
                </Routes>
            </AnimatePresence>
            <Suspense fallback={<div></div>}>
                <Footer />
            </Suspense>
        </>
    );
};

export default App;
