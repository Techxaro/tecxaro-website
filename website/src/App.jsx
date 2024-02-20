// IMPORTING ALL PAGES BELOW
import { HomePageDesktop } from './screenSize/Desktop/Pages/homePage'


import './App.css'
import { HomePageMobile } from './screenSize/Mobile/Pages/homePageMobile';
// import { HomePageMobile } from './screenSize/Mobile/Pages/homePageMobile';

function App() {

  const deviceWidth = window.innerWidth;
  console.log(deviceWidth);




  if (deviceWidth > 450) {
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
