// IMPORTING THE TECXARO LOGO
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"
import whatsApp from "../../../assets/svg/whatsapp.svg"
import linkedin from "../../../assets/svg/linkedin.svg"
import youtube from "../../../assets/svg/youtube.svg"


export const ContactUsSection = () => {



  // OPENS THE WEBSITE FOR FILLING UP PERSONAL INFO
  const urlHandler = () => {
    window.open("https://sprw.io/stt-lmC3P", "_blank")
  }



  return (
    <div id="CUS-M-main">

      {/* THE WRAPPER FOR THIS SECTION */}
      <div id="CUS-M-wrapper">



        {/* CONTACT US HEADING */}
        <div className="CUS-M-headingWrapper relative">

          <h1 className=" raleway CUS-M-heading font-semibold normal-z">Contact <span className=" color-orange">Us</span></h1>


          {/* THE ORANGE CIRCLE */}
          <div className=" CUS-smallOrange-circle circle-z">
          </div>



          {/* CONTACT US SUBTITLE */}
          <div className=" normal-z">
            <p className=" dmMono CUS-M-subTitle ">we are just a call away</p>
          </div>


        </div>











        {/* THE SOCIAL MEDIA LOGOS */}
        <div className="CUS-M-socialLogos">

          <div className=" flex mb-4 ml-2">
            <img className=" w-[2.6rem] h-[2.6rem] mr-2" src={linkedin} alt="" />
            <img className=" w-[2.6rem] h-[2.6rem] mr-2" src={whatsApp} alt="" />
            <img className=" w-[2.6rem] h-[2.6rem] mr-2" src={youtube} alt="" />
          </div>

          {/* CONTACT US BUTTON */}
          <div className="CUS-M-contactUs-button font-semibold" onClick={urlHandler}>
            <p className="raleway">Contact Us</p>
          </div>



        </div>







        {/* TECXARO LOGO */}
        <div className="CUS-M-tecxaroLogo">
          <img className=" w-[8rem]" src={tecxaroLogo} alt="" />
        </div>


        {/* THE SMALL ORANGE CIRCLE */}
        <div className="CUS-M-smallOrange-circle2">

        </div>
      </div>
    </div>
  )
}
