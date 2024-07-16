import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import UploadButton from './components/UploadButton';
import Newdisc from './components/Newdisc';
import KK from './components/Kk';
import Ir from './components/Iresume';
import ResumeAnalysis from './components/ResumeAnalysis';
import Options from './components/Options';
import Under from './components/Under';
import Score from './components/Score';
import Sugg from './components/Sugg';
import Bullet from './components/Bullet';
import Signup from './components/Signup';
import Response from './components/Response';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar />                <Header />
                <UploadButton /><br></br><br></br><br></br><br></br>
                <Newdisc />
                <FeatureSection />
                <Testimonials />
                <HowItWorks /><br></br><br></br><br></br><br></br>
                <Ir />
                <AboutUs />
                <Footer /></>
    },
    {
    path: "/",
    element: <><Navbar />      <Login />        
              {/* <Header />
              <UploadButton /><br></br><br></br><br></br><br></br>
              <Newdisc />
              <FeatureSection />
              <Testimonials />
              <HowItWorks /><br></br><br></br><br></br><br></br>
              <Ir />
              <AboutUs />
              <Footer /> */}
              </>
  },
    {
      path: "/navo",
      element: <><Navbar /></>
    },
    {
      path: "/pref",
      element: <><Navbar /><Options /></>
    },
    {
      path: "/about",
      element: <><Navbar /><AboutUs /></>
    },
    {
      path: "/kk",
      element: <><Navbar /><KK /></>
    },
    {
      path: "/jj",
      element: <><Navbar /><ResumeAnalysis/></>
    },
    {
      path: "/na",
      element: <><Navbar /><Under/></>
    },
    {
      path: "/score",
      element: <><Navbar /><Score /></>
    },
    {
      path: "/sugg",
      element: <><Navbar /><Sugg/></>
    },
    {
      path: "/bullet",
      element: <><Navbar /><Bullet/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup/></>
    },
    {
      path: "/response",
      element: <>
        <Navbar /><Response />
      </>
    }
  ])
  return (
    <>
                

                

      <RouterProvider router={router} />
      {/* <FeatureSection /> */}

        

      
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
