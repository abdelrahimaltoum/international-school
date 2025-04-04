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
import RelatedPages from './relatedPages';
import OurSchool from './ourSchool';
import OurTeam from './ourTeam';
import Campus from './campus';
import Health from './health';
import HeadMessage from './headMessage';
import HowToApply from './howToApply';
import OnlinePayment from './onlinePayment';
import ContactUs from './contactUs';
import EducationalExperts from './educationalExperts';
import Community from './community';
import ExellenceAtGISC from './exellenceAtGISC';
import Environment from './enviroment';
import Accreditations from './accreditations';
import FutureTechnology from './futureTechnology';
import Vision from './vision';
import OurValues from './ourValues';
import GEMdiffernce from './GEMdifference';
import Vacancies from './vacancies';
import AgeGuide from './ageGuide';
import Transport from './transport';
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
           <RelatedPages/> 
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
           <Route path="/our-school" element={
              <>
              <Header />
             <OurSchool/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/message-from-the-head" element={
              <>
              <Header />
             <HeadMessage/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/our-team" element={
              <>
              <Header />
             <OurTeam/>
             
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/campus-and-location" element={
              <>
              <Header />
             <Campus/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/health-and-safety" element={
              <>
              <Header />
             <Health/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/how-to-apply" element={
              <>
              <Header />
             <HowToApply/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/online-payment" element={
              <>
              <Header />
             <OnlinePayment/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />

              <Route path="/contact-us" element={
              <>
              <Header />
             <ContactUs/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/educational-experts" element={
              <>
              <Header />
             <EducationalExperts/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/a-value-driven-community" element={
              <>
              <Header />
             <Community/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/excellence-at-GISC" element={
              <>
              <Header />
             <ExellenceAtGISC/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/enabling-learning-enviroment" element={
              <>
              <Header />
             <Environment/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/accreditations" element={
              <>
              <Header />
             <Accreditations/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/Technology-for-the-Future" element={
              <>
              <Header />
             <FutureTechnology/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/vision-and-mission" element={
              <>
              <Header />
             <Vision/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           
           <Route path="/our-core-values" element={
              <>
              <Header />
             <OurValues/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
         
           <Route path="/The-GEMS-Difference" element={
              <>
              <Header />
             <GEMdiffernce/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/Vacancies" element={
              <>
              <Header />
             <Vacancies/>
             <RelatedPages/>
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/age-replacement-guide" element={
              <>
              <Header />
             <AgeGuide/>
            
          <NextSteps/>
          <Footer/>
           </> } />
           <Route path="/School-transport" element={
              <>
              <Header />
             <Transport/>
            
          <NextSteps/>
          <Footer/>
           </> } />
           
           </Routes>
        
       </Router>
       
     
  );
   
   
  
}
export default App
