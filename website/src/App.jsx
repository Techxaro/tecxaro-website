// IMPORTING ALL PAGES BELOW
import { HomePageDesktop } from './screenSize/Desktop/Pages/homePage'


import './App.css'
import { HomePageMobile } from './screenSize/Mobile/Pages/homePageMobile';
// import { useEffect } from 'react';
// import { HomePageMobile } from './screenSize/Mobile/Pages/homePageMobile';

function App() {

  


  // AN OBJECT CONTAINING DETAILS ABOUT THE DEVICE
  let deviceObj = {
    deviceWidth: window.innerWidth,
  };


  
  

  



  if (deviceObj.deviceWidth > 450) {

    
    return (
      <div>
        <HomePageDesktop />
      </div>
    )
  }else{
    
    return(
      <div>
        <HomePageMobile/>
      </div>
    )
  }

}

export default App
