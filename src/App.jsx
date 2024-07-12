import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import UploadButton from './components/UploadButton';
import Newdisc from './components/Newdisc';
import Item from './Componenets/Item';
import Update from './Componenets/Update';
import Hero from './Componenets/Hero';
import Hell from './Componenets/Hell';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "./components/Newdisc",
      element: <><Navbar /><User /></>
    },
  ])
  return (
    <>
                <Header />
                <UploadButton /><br></br><br></br><br></br><br></br>
                <Newdisc />
                <FeatureSection />
                <Testimonials />
                <HowItWorks />
                   <Item/>
                  <Update/>         
                   <Hero/>
                   <Hell/>
                

      <RouterProvider router={router} />
      {/* <FeatureSection /> */}

        
       <AboutUs />
       <Footer />
      
      </>

    // <div className="App">
    //   <Header />
    //   <FeatureSection />
    //   <Testimonials />
    //   <HowItWorks />
    //   <AboutUs />
    //   <Footer />
    // </div>
        
  )
}

export default App

// import React from 'react';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// export default App;
