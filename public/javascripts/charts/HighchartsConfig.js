!function(){
  Highcharts.setOptions({
    chart: {
      marginTop: 36,
      backgroundColor: "transparent",
      style: {
        fontFamily: "inherit"
      }
    },
    colors: [ "#fb7767", "#f93631", "#fb9c92", "#2a2a33", "#adbdc4", "#e1ebed" ],
    title: {
      text: ""
    },
    legend: {
      verticalAlign: "top",
      align: "left",
      floating: true,
      x: -8,
      y: -8
    },
    plotOptions: {
      column: {
        pointWidth: 5,
        borderRadius: 2.5,
        borderWidth: 0
      },
      line: {
        marker: {
          fillColor: "#ffffff",
          lineWidth: 2,
          lineColor: null
        }
      }
    },
    xAxis: {
      tickmarkPlacement: "on",
      labels: {
        staggerLines: 1
      },
      title: {
        enabled: false
      }
    },
    yAxis: {
      gridLineColor: "#e1ebed",
      title: {
        enabled: false
      }
    },
    tooltip: {
      shared: true
    }
  })
}();