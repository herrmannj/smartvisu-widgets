// -----------------------------------------------------------------------------
// P E R O I O D
// -----------------------------------------------------------------------------
$(document).delegate('div[data-widget="chart.period"]', {
  'init': function (event) {
  },

  'update': function (event, response) {
    // response: { "gad": "hcs.data.Heating.WaterTemperatureChart",
    //             "data": [ [1426374304000, 45], [1426376105000, 47] ],
    //             "updatemode": "complete" }
    // updatemode: "complete" or "additional"
    
    var items = $(this).attr('data-item').explode();
    var labels = $(this).attr('data-labels').explode();
    var colors = $(this).attr('data-colors').explode();
    var types = $(this).attr('data-types').explode();
    var axis = $(this).attr('data-axis').explode();
    var zoom = $(this).attr('data-zoom');
    var ymin = $(this).attr('data-ymin');
    var ymax = $(this).attr('data-ymax');
    var chartOptions = $(this).attr('data-chartoptions');

    ymin = ymin === "" ? undefined : ymin;
    ymax = ymax === "" ? undefined : ymax;

    var plotDiv = $('#' + this.id);
    var chart = plotDiv.highcharts();

    // Initialize the chart only once
    if(!chart) {
      var chartOptionsError = "";

      var parsedChartOptions = {};
      if (chartOptions) {
        try {
          parsedChartOptions = JSON.parse(chartOptions);
        }
        catch (ex) {
          chartOptionsError = ex.toString();
        }
      }

      var chartDefinition = {
        xAxis: { type: "datetime",
                 title: { text: axis[0]}
               },
        yAxis: { min: ymin,
                 max: ymax,
                 title: { text: axis[1] }
               },
        chart: {zoomType: zoom === "disabled" ? "" : "x",
                panning: true,
                panKey: "shift",
                showAxes: true
               }
      };

      $.extend(chartDefinition, parsedChartOptions);

      if (chartOptionsError) {
        plotDiv.html("Error in the passed options:<br>" + chartOptionsError + "<br><br>Options:<br>" + chartOptions);
      }
      else {
        plotDiv.highcharts(chartDefinition);
        chart = plotDiv.highcharts();
      }
    }

    
    var receivedSeries = {
      type: "line",
      step: false,
      name: response.gad,
      data: response.data,
      color: '#ff0000'
    };

    for (var itp=0; itp < items.length; itp++) {
      if (items[itp] == response.gad) {
        receivedSeries.name = labels[itp]  ? labels[itp] : response.gad;
        receivedSeries.color = colors[itp];
        receivedSeries.type = types[itp];
        break;
      }
    }


    addOrUpdateSeries(chart, receivedSeries);

  },

  'point': function (event, response) {
    for (var i = 0; i < response.length; i++) {
      if (response[i]) {
        var chart = $('#' + this.id).highcharts();

        // more points?
        for (var j = 0; j < response[i].length; j++) {
          chart.series[i].addPoint(response[i][j], false, (chart.series[i].data.length >= 100));
        }
        chart.redraw();
      }
    }
  }
});

// -----------------------------------------------------------------------------
// T E M P R O S E
// -----------------------------------------------------------------------------
$(document).delegate('div[data-widget="chart.temprose"]', {
  'update': function (event, response) {
    // response is: {{ gad_actual_1, gad_actual_2, gad_actual_3, gad_set_1, gad_set_2, gad_set_3 }}
    var label = $(this).attr('data-label').explode();
    var axis = $(this).attr('data-axis').explode();
    var count = parseInt($(this).attr('data-count'));

    var plotDiv = $('#' + this.id);
    var chart = plotDiv.highcharts();

    if(!chart) {
      var chartDefinition = {
        chart: {polar: true, type: 'line', marginLeft: 10 },
        xAxis: { categories: axis, tickmarkPlacement: 'on', lineWidth: 0 },
        yAxis: { gridLineInterpolation: 'polygon', lineWidth: 0 },
        tooltip: { formatter: function () {
          return this.x + ' - ' + this.series.name + ': <b>' + this.y.transUnit('temp') + '</b>';
        } },
        legend: { x: 10, layout: 'vertical' }
      };

      plotDiv.highcharts(chartDefinition);
      chart = plotDiv.highcharts();
    }

    var s1 = {
      name: label[0], pointPlacement: 'on',
      data: response.slice(0, count)
    };

    addOrUpdateSeries(chart, s1);

    if (response.slice(count).length == count) {
      var  s2 = {
        name: label[1], pointPlacement: 'on',
        data: response.slice(count),
        dashStyle: 'shortdot'
      };
      addOrUpdateSeries(chart, s2);

    }

  }
  
});



// -----------------------------------------------------------------------------
// C O M F O R T C H A R T
// -----------------------------------------------------------------------------
$(document).delegate('div[data-widget="chart.comfortchart"]', {
  'update': function (event, response) {
    // response is: {{ gad_temp }}, {{ gad_humidity }}

    var label = $(this).attr('data-label').explode();
    var axis = $(this).attr('data-axis').explode();

    var plotDiv = $('#' + this.id);
    var chart = plotDiv.highcharts();

    if(!chart) {
      var chartDefinition = {
        xAxis: {min: 10, max: 35, title: {text: axis[0], align: 'high', margin: -2}},
        yAxis: {min: 0, max: 100, title: {text: axis[1], margin: 7}},
        plotOptions: {area: {enableMouseTracking: false}},
        tooltip: {
          formatter: function () {
            return this.x.transUnit('temp') + ' / ' + this.y.transUnit('%');
          }
        }
      };

      plotDiv.highcharts(chartDefinition);
      chart = plotDiv.highcharts();

      chart.addSeries({
        type: 'area', name: label[0], lineWidth: 0,
        data: [
          [17, 35],
          [16, 75],
          [17, 85],
          [21, 80],
          [25, 60],
          [27, 35],
          [25, 19],
          [20, 20],
          [17, 35]
        ]
      }, true);

      chart.addSeries({
        type: 'area', name: label[1], lineWidth: 0,
        data: [
          [17, 75],
          [22.5, 65],
          [25, 33],
          [18.5, 35],
          [17, 75]
        ]
      }, true);

    }

    addOrUpdateSeries(chart, {
      name: 'point',
      data: [
        [response[0] * 1.0, response[1] * 1.0]
      ],
      marker: {enabled: true, lineWidth: 2, radius: 6, symbol: 'circle'},
      showInLegend: false
    });

  }

});


// -----------------------------------------------------------------------------
// R T R
// -----------------------------------------------------------------------------
$(document).delegate('div[data-widget="chart.rtr"]', {
  'update': function (event, response) {
    // response:
    // { "gad": "hcs.data.Heating.WaterTemperatureChart",
    //   "data": [ [1426374304000, 45], [1426376105000, 47] ],
    //   "updatemode": "complete" (or "additional")
    // }
    //
    // { "gad": "hcs.data.valve",
    //   "data": 25
    // }
    //

    var label = $(this).attr('data-label').explode();
    var axis = $(this).attr('data-axis').explode();
    var definedSeries = $(this).attr('data-series').explode();
    var definedGADs = $(this).attr('data-item').explode();

    var plotDiv = $('#' + this.id);
    var chart = plotDiv.highcharts();

    // Initialize the chart only once
    if(!chart) {
      var chartDefinition = {
        chart: { type: 'line' },
        xAxis: { type: 'datetime' },
        yAxis: { min: $(this).attr('data-min'),
                 max: $(this).attr('data-max'),
                 title: { text: axis[1] }
               },
        tooltip: { formatter: function () {
          return this.series.name + ' <b>' + (this.percentage ? this.y.transUnit('%') : this.y.transUnit('temp')) + '</b>';
        }}
      };

      plotDiv.highcharts(chartDefinition);
      chart = plotDiv.highcharts();
    }

    var receivedSeries = undefined;
    if(response.gad === definedSeries[0]) {
      receivedSeries = {
        type:  "spline",
        name:  label[0],
        data:  response.data,
        color: undefined
      };
    }
    else if(response.gad === definedSeries[1]) {
      receivedSeries = {
        type:  "line",
        step:  'left',
        name:  label[1],
        data:  response.data,
        color: undefined,
        dashStyle: 'shortdot'
      };
    }
    else if(response.gad === definedGADs[2]) {
      var percent = response.data;
      if (percent < 1) {
        percent = percent * 100;
      }
      else if (percent > 100) {
        percent = Math.round(percent / 10);
      }

      receivedSeries = {
        type: 'pie', name: '∑ On: ',
        data: [
          {
            name: 'On', y: percent
          },
          {
            name: 'Off', y: (100 - percent), color: null
          }
        ],
        center: [ '95%', '90%' ],
        size: 35,
        showInLegend: false,
        dataLabels: { enabled: false }
      };
    }

    if(receivedSeries) {
      addOrUpdateSeries(chart, receivedSeries);
    }

  }

});


// =============================================================================
// H E L P E R S
// =============================================================================

// -----------------------------------------------------------------------------
// Add or update a series in the chart
// -----------------------------------------------------------------------------
var addOrUpdateSeries = function(chart, series) {
  var currentSeries = null;
  for (var s = 0; s < chart.series.length; s++) {
    if(chart.series[s].name == series.name) {
      currentSeries = chart.series[s];
      break;
    }
  }
  if (currentSeries) {
    currentSeries.setData(series.data, true);
  }
  else {
    chart.addSeries(series, true);
  }
};



