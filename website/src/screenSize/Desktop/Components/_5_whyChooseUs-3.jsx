

// IMPORTING THE ASSETS BELOW
import innovationQuoteImgSvg from "../../../assets/svg/focusOnInnovation.svg"


export const FocusOnInnovation = () => {
  return (
    <div id="FOI-main">



      {/* THE WRAPPER AROUND THE QUOTE AND THE TEXT */}
      <div className="FOI-wrapper">



        <div>
          {/* THE QUOTE SVG */}

          <img src={innovationQuoteImgSvg} alt="the quote saying it always seems impossible until its done " />


        </div>



        <div className="FOI-text-part">

          {/* SUB HEADING "FOCUS ON INNOVATION" */}
          <div className="mb-12 mr-6">
            <h1 className="sub-heading-text font-semibold">Focus on
              <span className="color-orange"> Innovation</span></h1>
          </div>




          {/* MAIN PARAGRAPH  */}
          <div className="ml-4">
            <p className="paragraph-text">Tecxaro fosters <span className="color-orange text-3xl">innovation</span> by encouraging creative thinking and hands-on learning. We guide students to <span className="highlight-orange">apply theoretical knowledge practically</span>, cultivating a mindset of innovation. Our focus on <span className="color-orange text-3xl">real-world impact</span> inspires the next generation of innovators, ready to bring positive change through robotics and technology. Join us in the journey of exploration and active innovation cultivation.</p>
          </div>


        </div>




      </div>



    </div>
  )
}
