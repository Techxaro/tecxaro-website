// IMPORTING ALL PAGES BELOW
import { HomePageDesktop } from './screenSize/Desktop/Pages/homePage'


import './App.css'
import { HomePageMobile } from './screenSize/Mobile/Pages/homePageMobile';
import { useEffect } from 'react';
import { useRecoilState } from "recoil"
import { screenWidth_atom } from './atoms/atoms';

// import { useEffect } from 'react';
// import { HomePageMobile } from './screenSize/Mobile/Pages/homePageMobile';

function App() {


  // RESIZING EVENT LISTNER
  const [windowWidth, setWindowWidth] = useRecoilState(screenWidth_atom);

  useEffect(() => {


    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };


  }, []);

  // console.log(windowWidth)


  // AN OBJECT CONTAINING DETAILS ABOUT THE DEVICE
  // let deviceObj = {
  //   deviceWidth: window.innerWidth,
  // };











  if (windowWidth < 950) {

    // console.log("This is triggering")
    return (
      <>
        <HomePageMobile />
      </>
    );
  }

  else if (windowWidth >= 450) {
    return (
      <>
        <HomePageDesktop />
      </>
    );
  }



}

export default App
