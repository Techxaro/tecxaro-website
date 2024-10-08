import teamImg from "../../../assets/tecxaro_team/tecxaro_teamPic.jpg"

export const TeamSection = () => {
  return (
    <div id="TS-main">

      
        {/* OUR TEAM HEADING */}
        <div className="text-8xl raleway font-semibold mb-4 ">
          <h1 className=" text-white PS-heading">Our <span className=" color-orange">Team</span></h1>
        </div>


        {/* IMAGE OF OUR TEAM */}
        <div className="TS-team-image-wrapper">
            <img className="TS-team-image" src={teamImg} alt="" />
        </div>
      


    </div>
  )
}
