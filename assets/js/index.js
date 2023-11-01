
function renderDonut(before, after){
    var options = {
        chart: {
            type: "bar",
            stacked: true,
            height: "500px",
        },
        // colors: ["green", "orange", "red"],
        series: [
            {
                name: "Profit",
                data: [before.profit, after.profit]
            },
            {
                name: "Shrinkage",
                data: [before.shrinkage, after.shrinkage]
            },
            {
                name: "Cost of Goods Sold",
                data: [before.cogs, after.cogs]
            }
        ],
        plotOptions: {
            bar: {
                dataLabels: {
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: "13px",
                            fontWeight: 900
                        }
                    }
                }
            },
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          xaxis: {
            categories: ["Before", "After"],
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
        }
    };
      
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
}

function formatNumber(x) {
    const num = parseFloat(x)
    const numWith4SF = num.toFixed(2);
    console.log(numWith4SF);
    const formattedNum = numWith4SF.replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g, "$1,");

  return formattedNum;

}

function calculateSavings(){
    const revenue = document.getElementById("revenue-input").value;
    let cogs = document.getElementById("cogs-input").value;
    const shrinkagePercentage = document.getElementById("shrinkage-input").value/100;
    const necessaryCogs = cogs * (1 - (shrinkagePercentage-0.085));
    console.log()



    let savings = (cogs-necessaryCogs) * 12;
    document.getElementById("savings-output").innerHTML = `$${formatNumber(savings)}`;
    document.getElementById("current-cogs").innerHTML = `$${formatNumber(cogs)}`;
    document.getElementById("current-profit").innerHTML = `$${formatNumber(revenue - cogs)}`;
    document.getElementById("ayoda-cogs").innerHTML = `$${formatNumber(necessaryCogs)}`;
    document.getElementById("ayoda-profit").innerHTML = `$${formatNumber(revenue - necessaryCogs)}`;
}
