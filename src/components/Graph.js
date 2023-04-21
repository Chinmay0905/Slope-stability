import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";


function Graph(){
        const styles = {
                display: {
                        display : "flex",
                        justifyContent : "right",
                        padding : "35px",
                        margin : "71px",
                }
        }
        const [inputdata, setInputdata] = useState({
                height:"0",
                length:"0",
                water:"0"
              })
              const [state, setState] = useState ({
            
              options: {
                chart: {
                  height: 500,
                  type: "line",
                      stacked: false
                    },
                    dataLabels: {
                      enabled: false
                    }
                  },
                    colors: ["#247BA0"],
                    series: [{
                      data: [
                        {
                          x: 0,
                          y: 15
                      },{
                          x: 12,
                          y: 15
                      }, {
                          x: 18,
                          y: 12
                      },{
                        x: 30,
                        y: 12
                    }
                    ],
                  }],
                  xaxis: {
                    type: 'numeric'
                  },
                    stroke: {
                      width: [5, 5]
                    },
                    plotOptions: {
                      bar: {
                        columnWidth: "80%"
                      }
                    },     
                    tooltip: {
                      shared: false,
                      intersect: true,
                      x: {
                        show: false
                      }
                    },
                    legend: {
                      horizontalAlign: "left",
                      offsetX: 40
                    }
                  }
            )
            function changehandle(e) {
                setInputdata({...inputdata,[e.target.height]:e.target.value})
              }
  return (
        <>
        <div className="whole"style={styles.display}>
        <ReactApexChart 
        options={state.options}
        series={state.series}
        type="line"
        height={350}
        width={800}
        />
        <div className="container" style={{fontSize:"12px"}}>
        <div className="mx-auto col-10 col-md-8 col-lg-6">
        <h1>Slope Properties</h1>
        <br />
        <div class="input-group mb-3 w-50 ">
        <span class="input-group-text" id="basic-addon1">Height</span>
        <input type="number" class="form-control" aria-label="Height" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3 w-50">
        <span class="input-group-text" id="basic-addon1">Length</span>
        <input type="number" class="form-control" aria-label="length" aria-describedby="basic-addon1" />
        </div>
        <button type="button" class="btn btn-primary">Analyse</button>
        </div>
        </div>
        </div>
      </>
  )
}

export default Graph