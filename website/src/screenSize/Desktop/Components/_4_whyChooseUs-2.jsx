import steveJobsImg from "../../../assets/jpg/steveJobsImg.jpg"



export const TailoredForYou = () => {
  return (
    <div id="TailouredForYou-whyChooseUs">





      {/* div containing the img and the text */}

      <div id="tailouredforyou-wrapper">


        {/* the image */}
        <img src={steveJobsImg} alt="" />






        {/* the text section div  */}
        <div className="text-wrapper-tailourMadeForYou mb-44">


          
          {/* the subheading part */}
          <div className=" mb-12">
            <h1 className="whyChooseUs-subheading raleway font-semibold">
              Tailoured for <span className=" text-[#F56B00]">you</span></h1>
          </div>




          {/* the paragraph part */}
          <div>
            <p className=" dmMono mainPara-tailourMadeForYou">Tecxaro is your ideal choice for robotics education, tailored specifically to college and high school students. Our courses blend academic relevance with a hands-on, practical approach, ensuring students not only understand theory but also gain valuable skills applicable in real-world scenarios. Our commitment to a targeted and comprehensive education sets us apart in preparing students for success in the field of robotics.</p>
          </div>


        </div>



      </div>








    </div>
  )
}
