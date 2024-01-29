// COMPONENTS   
import { Navbar } from "../Components/_0_navbar"
import { HeroSection } from "../Components/_1_heroSection"

// CSS
import "./homePage.css"

export const HomePageDesktop = () => {
  return (
    <div id="home-page-desktop-id" className=" bg-[#2A2A2A]">
        <Navbar/>
        <HeroSection/>
    </div>
  )
}
