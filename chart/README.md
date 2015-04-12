This is a complete replacement for the original plot.widgets.

#Example for chart.period:
 {% extends "rooms.html" %}
 {% import "widget_chart.html" as chart %}
 {% block content %}
 
    <div class="block">
      <div class="set-2" data-role="collapsible-set" data-theme="c" data-content-theme="a" data-mini="true">
        <div data-role="collapsible" data-collapsed="false" >
          <h3>chart.period</h3>
          
            {% set chartOptions = ' {
              "title": {   
                "text": "Ölverbrauch",
                "style": {
                  "color": "#00AA00",
                  "fontWeight": "bold",
                   "fontSize": "20px"
                }
              },
              "tooltip": {
                "enabled": false
              }
            }' %}
 
            {{ chart.period("OilConsumptionPlot",
                            ["hcs.data.OilConsumptionChart"],
                            "avg",
                            "5y 6m",
                            "1m",
                            "0",
                            "600",
                            "",
                            "Verbrauch",
                            ["#272"],
                            ["area"],
                            ["Jahr","Liter"],
                            "1d",
                            "300s",
                            chartOptions,
                            "hcs-min") }}
          </div>
        </div>
      </div>
 
    {% endblock %}
 
 
#A chart with three series: 
    {{ chart.period("HeatingTemperaturesPlot",
                    ["hcs.data.Heating.BurnerTemperatureChart","hcs.data.Heating.WaterTemperatureChart","hcs.data.Heating.OutsideTemperatureChart"],
                    "avg",
                    "2d",
                    "now",
                    "-20",
                    "80",
                    "",
                    ["Brenner","Wasser", "Außen"],
                    ["#ff0000", "#7777ff", "#DEC11B"]) }}
