// IMPORTING IMAGES BELOW
import steveJobsMobile from "../../../assets/jpg/mobile-version-tailouredForYou.jpg"

export const TailouredForYou = () => {
    return (
        <div id="TFY-main">


            {/* WRAPPER */}
            <div id="TFY-wrapper">



                {/* TAILOURED FOR YOU SMALL ORANGE CIRCLE */}
                <div className=" TFY-smallOrange-circle circle-z">
                </div>




                {/* TAILOURED FOR YOU HEADING */}
                <div className=" w-[100%] flex normal-z TFY-heading font-semibold mb-8">
                    <h1 className=" raleway">Tailored For <span className=" color-orange">You</span></h1>
                </div>



                {/* TAILOURED FOR YOU PARAGRAPH */}
                <div className=" TFY-M-paragraph normal-z mb-8">
                    <p className=" dmMono">Tecxaro is your ideal choice for robotics education, tailored specifically to college and high school students. Our courses blend academic relevance with a <span className=" text-orange-highlight">hands-on, practical approach</span>, ensuring students not only understand theory but also gain valuable skills applicable in real-world scenarios. Our commitment to a targeted and comprehensive education sets us apart in preparing students for success in the field of robotics.
                    </p>
                </div>



                {/* TAILOURED FOR YOU IMAGE */}
                <div className=" w-[100%]">
                    <img className=" w-[100%]" src={steveJobsMobile} alt="" />
                </div>



            </div>
        </div>
    )
}
