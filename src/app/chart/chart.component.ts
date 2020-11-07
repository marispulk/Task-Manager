import { Component, OnInit } from '@angular/core';
import * as FusionCharts from "fusioncharts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  categories = [{
    "bgcolor": "#999999",
    "category": [{
    "start": "1/11/2020",
    "end": "31/1/2021",
    "label": "Months",
    "align": "middle",
    "fontcolor": "#ffffff",
    "fontsize": "12"
    }]
    }, {
    "bgcolor": "#999999",
    "align": "middle",
    "fontcolor": "#ffffff",
    "fontsize": "12",
    "category": [{
    "start": "1/11/2020",
    "end": "30/11/2020",
    "label": "November"
    }, {
    "start": "1/12/2020",
    "end": "31/12/2020",
    "label": "December"
    }, {
    "start": "1/1/2021",
    "end": "31/1/2021",
    "label": "January"
    }]
    }, {
    "bgcolor": "#ffffff",
    "fontcolor": "#333333",
    "fontsize": "11",
    "align": "center",
    "category": [{
      "start": "2/11/2020",
      "end": "8/11/2020",
      "label": "Week 45"
    },{
      "start": "9/11/2020",
      "end": "15/11/2020",
      "label": "Week 46"
    },{
      "start": "16/11/2020",
      "end": "22/11/2020",
      "label": "Week 47"
    },{
      "start": "23/11/2020",
      "end": "29/11/2020",
      "label": "Week 48"
    },{
      "start": "30/11/2020",
      "end": "6/12/2020",
      "label": "Week 49"
    },{
      "start": "7/12/2020",
      "end": "13/12/2020",
      "label": "Week 50"
    },{
      "start": "14/12/2020",
      "end": "20/12/2020",
      "label": "Week 51"
    },{
      "start": "23/12/2020",
      "end": "29/12/2020",
      "label": "Week 52"
    }, {
      "start": "4/1/2021", // 2021 weeks
      "end": "10/1/2021",
      "label": "Week 1"
    },{
      "start": "11/1/2021",
      "end": "17/1/2021",
      "label": "Week 2"
    },{
      "start": "18/1/2021",
      "end": "24/1/2021",
      "label": "Week 3"
    },{
      "start": "25/1/2021",
      "end": "31/1/2021",
      "label": "Week 4"
    },

    ]
    }];

  //List out the different processes of the Gantt chart
  processes = {
    "headertext": "Task",
    "fontcolor": "#000000",
    "fontsize": "11",
    "isanimated": "1",
    "bgcolor": "#6baa01",
    "headervalign": "bottom",
    "headeralign": "left",
    "headerbgcolor": "#999999",
    "headerfontcolor": "#ffffff",
    "headerfontsize": "12",
    "align": "left",
    "isbold": "1",
    "bgalpha": "25",
    "process": [{
    "label": "Clear site",
    "id": "1"
    }, {
    "label": "Excavate Foundation",
    "id": "2",
    "hoverBandColor": "#e44a00",
    "hoverBandAlpha": "40"
    }, {
    "label": "Concrete Foundation",
    "id": "3",
    "hoverBandColor": "#e44a00",
    "hoverBandAlpha": "40"
    }, ]
  };

  datatable = {
    "showprocessname": "1",
    "namealign": "left",
    "fontcolor": "#000000",
    "fontsize": "10",
    "valign": "right",
    "align": "center",
    "headervalign": "bottom",
    "headeralign": "center",
    "headerbgcolor": "#999999",
    "headerfontcolor": "#ffffff",
    "headerfontsize": "12",
    "datacolumn": [{
    "bgcolor": "#eeeeee",
    "headertext": "Start{br}Date",
    "text": [{ // Datatable: Start date labels
    "label": "10/11/2020"
    }, {
    "label": "15/12/2020"
    }, {
    "label": "5/1/2021",
    },]

    }, {
    "bgcolor": "#eeeeee",
    "headertext": "End{br}Date",
    "text": [{ //Datatable: End date labels
    "label": "15/11/2020"
    }, {
    "label": "25/12/2020",
    }, {
    "label": "15/1/2020",
    }, ]
    }]
  };


   //Different tasks of the process
  tasks = {
    "task": [{
    "label": "Task",
    "processid": "1",
    "start": "10/11/2020",
    "end": "15/11/2020",
    "id": "1-1",
    "color": "#008ee4",
    "height": "76%",
    "toppadding": "12%",
    "bottompadding": "12%"
    }, {
    "label": "Task",
    "processid": "2",
    "start": "15/12/2020",
    "end": "25/12/2020",
    "id": "2-1",
    "color": "#008ee4",
    "height": "76%",
    "toppadding": "12%",
    "bottompadding": "12%"
    }, {
    "label": "Task",
    "processid": "3",
    "start": "5/1/2021",
    "end": "15/1/2021",
    "id": "3-1",
    "color": "#008ee4",
    "height": "76%",
    "toppadding": "12%",
    "bottompadding": "12%"
    },]
  };

  dataSource: Object;

  constructor() {
    this.dataSource = {
      "chart": {
      "theme": "fusion",
      "caption": "ShareCloud Task Manager",
      "dateformat": "dd/mm/yyyy",
      "outputdateformat": "ddds mns yy",
      "ganttwidthpercent": "60",
      "ganttPaneDuration": "40",
      "ganttPaneDurationUnit": "d",
      "plottooltext": "$processName{br}$label starting date $start{br}$label ending date \$end",
      "legendBorderAlpha": "0",
      "legendShadow": "0",
      "usePlotGradientColor": "0",
      "showCanvasBorder": "0",
      "flatScrollBars": "1",
      "gridbordercolor": "#333333",
      "gridborderalpha": "20",
      "slackFillColor": "#e44a00",
      "taskBarFillMix": "light+0"
      },
      "categories": this.categories,
      "processes": this.processes,
      "datatable": this.datatable,
      "tasks": this.tasks,
      "milestones": {
      "milestone": [{
      "date": "2/6/2014",
      "taskid": "12",
      "color": "#f8bd19",
      "shape": "star",
      "tooltext": "Completion of Phase 1"
      }]
      }
          }; // end of this.dataSource
  }

  ngOnInit(): void {
  }

   // Set to current date today
   today = new Date();

}
