import React, { useState } from "react";

function Graph() {

  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [angle, setAngle] = useState();
  const [wHeight, setWHeight] = useState();
  const [print, setPrint] = useState(false);


  function getHeight(e) {
    setHeight(e.target.value);
    setPrint(false);
  }
  function getWidth(e) {
    setWidth(e.target.value);
    setPrint(false);
  }
  
  function getAngle(e) {
    setAngle(e.target.value);
    setPrint(false);
  }
  function getWaterHeight(e) {
    setWHeight(e.target.value);
    setPrint(false);
  }

  return (
    <>
    <br />
    <br />
      <h1 className="text-center">
        Slope Stability Calculation
      </h1>
      <br />
      <br />

      <div className="w-50 p-3 container d-flex justify-content-center ">
        <div className="form">
        <form>
            <div className="mb-3">
              <label className="h4" >Height of slice</label>
              <input className="form-control form-control" type="number" value={height} onChange={getHeight} id="slope_length" placeholder="Enter Slope Height" aria-label=".form-control-lg example"/>
            </div>
            <div className="mb-3">
              <label className="h4" >Width of slice</label>
              <input className="form-control form-control" type="number" value={width} onChange={getWidth} id="slope_height" placeholder="Enter Unit Weight" aria-label=".form-control-lg example"/>
            </div>
            <div className="mb-3">
              <label className="h4" >Slope Angle of the base of slice</label>
              <input className="form-control form-control" type="number" value={angle} onChange={getAngle} id="slope_height" placeholder="Enter Slope Angle (In radians)" aria-label=".form-control-lg example"/>
            </div>
            <div className="mb-3">
              <label className="h4" >Height of water below crest level</label>
              <input className="form-control form-control" type="number" value={wHeight} onChange={getWaterHeight} id="slope_height" placeholder="Enter Water Height" aria-label=".form-control-lg example"/>
            </div>
        </form>
          <button className="btn btn-primary h3" id="btn1" onClick={() => {setPrint(true)}}>Analyse</button>
        </div>
        <br />
        <br />

       </div>
      {
        print?
        <h2 className="text-center">The slope is {((5*width + (20*height*width)*0.57735)/20*height*width*0.027) >=1 ? "stable" : "unstable"}
        <h4> Safety Factor = {(5*width + (20*height*width)*0.57735)/20*height*width*0.027} </h4>
         
          </h2>
        
        : null
        
      }
    </>
  )
}

export default Graph