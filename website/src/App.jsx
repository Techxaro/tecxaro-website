// IMPORTING ALL PAGES BELOW
import { HomePageDesktop } from './screenSize/Desktop/Pages/homePage'


import './App.css'
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
        This is the mobile version
      </div>
    )
  }

}

export default App
