// IMPORTING THE ICONS HERE
import linkedin from "../../../assets/ContactUsSection/linkedin(1).png"
import instagram from "../../../assets/ContactUsSection/instagram.png"
import mail from "../../../assets/ContactUsSection/mail.png"
import telePhone from "../../../assets/ContactUsSection/telephone.png"
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"

export const ContactUsSection = () => {
  return (
    <div id="CUS-main">


      {/* THE WRAPPER */}
      <div id="CUS-wrapper">







        {/* THE HEADING CONTACT US */}
        <div className=" flex flex-col justify-center items-center mb-24">


          <div className="text-8xl raleway font-semibold ">
            <h1 className=" color-orange">Contact <span className=" text-white">Us</span></h1>
          </div>


          {/* SUBTITLE */}
          <div>
            <p className=" text-white font-semibold text-xl dmMono">Made by the tech team @ <span className=" color-orange">Tecxaro</span> </p>
          </div>


        </div>





        <div className=" w-[100%] flex justify-between items-center">
          {/* THE TWO LOGOS */}
          <div className=" flex justify-between w-[11rem]">

            <img onClick={() => window.open("https://www.linkedin.com/company/tecxaro/posts/?feedView=all","_blank")} className=" h-[4.5rem] cursor-pointer" src={linkedin} alt="" />

            <img onClick={() => window.open("https://www.instagram.com/tecxaro/","_blank")} className=" h-[4.7rem] cursor-pointer" src={instagram} alt="" />

          </div>


          {/* CONTACT US BUTTON */}
          <div className="CUS-contactus-button text-4xl font-semibold raleway px-6 py-2">
            <p>Contact <span className=" color-orange">Us</span></p>
          </div>




        </div>




        {/* THE PHONE ICON AND THE EMAIL ICON */}
        <div className=" text-white absolute bottom-0 right-0 dmMono">

          {/* PHONE 2 */}
          <div className="flex justify-end items-center">
            <p>+91 9827074094</p>
            <img className="h-[1rem] ml-2" src={telePhone} alt="" />
          </div>



          {/* PHONE 1 */}
          <div className="flex justify-end items-center mb-2">
            <p>+91 8638713411</p>
            <img className="h-[1rem] ml-2" src={telePhone} alt="" />
          </div>



          {/* EMAIL */}
          <div className="flex justify-end items-center">
            <p>tecxaro@gmail.com</p>
            <img className="h-[1.6rem] ml-2" src={mail} alt="" />
          </div>


        </div>

        {/* TECXARO LOGO */}
        <div className="CUS-tecxaro-logo">
          <img src={tecxaroLogo} alt="" />
        </div>

      </div>
    </div>
  )
}
