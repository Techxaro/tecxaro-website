import PropTypes from 'prop-types';

// IMPORTING CSS HERE
import "../Pages/homePageMobile.css"



export const ProjectCard = (props) => {
  return (
    <div id='PC-M-main'>
        

        {/* WRAPPER */}
        <div id='PC-M-wrapper'>

            {/* PROJECT IMAGE */}
            <div>
                <img src={props.img} alt="" />
            </div>


            {/* PROJECT NAME */}
            <div className=' w-[100%] raleway font-semibold'>
                <h1 className='PC-M-projectHeading'>{props.projHeading}</h1>
            </div>


            {/* PROJECT PARA */}
            <div className=' dmMono'>
                <p>{props.projPara}</p>
            </div>


            {/* LEARN MORE BUTTON */}
            <div>

            </div>

        </div>
    </div>
  )
}


ProjectCard.propTypes = {
    projHeading:PropTypes.string,
    projPara:PropTypes.string,
    img:PropTypes.any,
  };

