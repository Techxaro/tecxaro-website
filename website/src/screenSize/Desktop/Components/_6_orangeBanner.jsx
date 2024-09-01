

export const TheOrangeBanner = () => {


  // OPENS THE WEBSITE FOR FILLING UP PERSONAL INFO
  const urlHandler = () => {
    window.open("https://tally.so/r/3lLPG5","_blank")
  }



  return (
    <div id="TOB-main">


      {/* THE WRAPPER */}
      <div className="TOB-wrapper">



        {/* THE WRITING PART */}
        <div className="dmMono text-3xl font-semibold">
          <p>solving <span className="TOB-bolded">Real World Problems</span> </p>
          <p className="TOB-lineBelow">with <span className="TOB-bolded TOB-background">Innovating</span> Solutions</p>
        </div>



        {/* JOIN US BUTTON */}
        <div className="cursor-pointer" onClick={urlHandler}>
          <div className=" raleway TOB-joinUs-button font-semibold">Join <span className="color-orange">Us</span></div>
        </div>



      </div>


    </div>
  )
}
