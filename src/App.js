import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function App() {
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
        colors: ["#FF1654", "#247BA0"],
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
  <div className="App">
    <h1>React Apex Chart</h1>

    <br />
    <br />

    <ReactApexChart 
    options={state.options}
    series={state.series}
    type="line"
    height={350}
    width={800}
    />
    <div className="form">
      <h1>Slope Properties</h1>
    Height : <input type="number" name="height" id="form"  onChange={changehandle} /><br />
    Length : <input type="number" name="length" id="form" value={inputdata.length} onChange={changehandle}/><br />
    Water-level : <input type="number" name="water" id="form" value={inputdata.water} onChange={changehandle} /><br/>
    <button>Analyse</button>
    </div>
  </div>
);
}

export default App