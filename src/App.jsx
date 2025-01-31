import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activites from './activites'
import Annoncment from './announcment'
import './App.css'
import Footer from './footer'
import Header from './header'
import NextSteps from './nextSteps'
import Welcome from './welcome'
import WelcomeMessage from './welcomeMessage'
import WhyGISC from './whyGISC'
import AboutUs from './aboutUs';
import ForParents from './forParents';
import Admissions from './admissions';
import Curriculum from './curriculum';
import WhyGISCPage from './whyGISCPage';
import Apply from './apply';
function App() {
  return (
   
    
          
   <Router> 
      <Routes>
      <Route path="/" element={<>
             <Header/> 
              <Welcome/>
                <Annoncment/>
              <WelcomeMessage/>
                <Activites/>
              <WhyGISC/>
              <NextSteps/>
              <Footer/>
           
              </>
              } />
   
      <Route path="/about" element={<>
             <Header/>
              <AboutUs/>
              <NextSteps/>
              <Footer/>
           
              </>
              } />
              <Route path="/apply" element={<>
             <Apply/>
             <Footer/>
           
              </>
              } />
               <Route path="/whyGISC" element={<>
             <Header/>
              <WhyGISCPage/>
              <NextSteps/>
              <Footer/>
           
              </>
              } />
   
           <Route path="/admissions" element={
              <>
              <Header />
         <Admissions/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/forparents" element={
              <>
              <Header />
             <ForParents/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/curriculum" element={
              <>
              <Header />
             <Curriculum/>
          <NextSteps/>
          <Footer/>
           </> } />
             
           </Routes>
        
       </Router>
       
     
  );
   
   
  
}
export default App
