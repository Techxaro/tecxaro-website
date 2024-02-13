

// IMPORTING THE ASSETS BELOW
import innovationQuoteImgSvg from "../../../assets/svg/focusOnInnovation.svg"


export const FocusOnInnovation = () => {
  return (
    <div id="FOI-main">



      {/* THE WRAPPER AROUND THE QUOTE AND THE TEXT */}
      <div>



        <div>
          {/* THE QUOTE SVG */}

          <img src={innovationQuoteImgSvg} alt="the quote saying it always seems impossible until its done " />


        </div>



        <div>

          {/* SUB HEADING "FOCUS ON INNOVATION" */}
          <div>
            <h1 className="sub-heading-text font-semibold">Focus on Innovation</h1>
          </div>




          {/* MAIN PARAGRAPH  */}
          <div>
            <p className="paragraph-text">Tecxaro fosters innovation by encouraging creative thinking and hands-on learning. We guide students to apply theoretical knowledge practically, cultivating a mindset of innovation. Our focus on real-world impact inspires the next generation of innovators, ready to bring positive change through robotics and technology. Join us in the journey of exploration and active innovation cultivation.</p>
          </div>


        </div>




      </div>



    </div>
  )
}
