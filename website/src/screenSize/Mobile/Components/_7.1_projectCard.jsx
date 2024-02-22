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
                    <img className='PC-M-projectImg' src={props.img} alt="" />
                </div>


                {/* PROJECT NAME */}
                <div className=' w-[100%] raleway font-semibold mb-4 mt-2'>
                    <h1 className='PC-M-projectHeading'>{props.projHeading}</h1>
                </div>


                {/* PROJECT PARA */}
                <div className=' dmMono mb-6'>
                    <p className='PC-M-projectParagraph'>{props.projPara}</p>
                </div>


                {/* LEARN MORE BUTTON */}
                <div className=' w-[100%] flex justify-end'>
                    <div className='PC-M-learnMoreButton'>
                        <p className=' dmMono'>Learn more</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


ProjectCard.propTypes = {
    projHeading: PropTypes.string,
    projPara: PropTypes.string,
    img: PropTypes.any,
};

