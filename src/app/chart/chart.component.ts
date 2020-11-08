import { Component, OnInit } from '@angular/core';
import * as FusionCharts from "fusioncharts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  selectedTask: string = '';
  selectedTaskObject: any;

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
    "process": [
      {
        "label": "Clear site",
        "id": "1"
      },
      {
        "label": "Excavate Foundation",
        "id": "2",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      },
      {
        "label": "Concrete Foundation",
        "id": "3",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      },
    ]
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
    "datacolumn": [
      {
        "bgcolor": "#eeeeee",
        "headertext": "Start{br}Date",
        "text": [
          { // Datatable: Start date labels
            "label": "2020-11-10",
          },
          {
            "label": "2020-12-15",
          },
          {
            "label": "2021-01-05",
          },
        ]
      },
      {
        "bgcolor": "#eeeeee",
        "headertext": "End{br}Date",
        "text": [
          { //Datatable: End date labels
            "label": "2020-11-15",
          },
          {
            "label": "2020-12-25",
          },
          {
            "label": "2021-01-15",
          },
        ]
      }
    ]
  };


   //Different tasks of the process
  tasks = {
    "task": [
      {
        "label": "Task",
        "processid": "1",
        "start": "10/11/2020",
        "end": "15/11/2020",
        "id": "1-1",
        "color": "#008ee4",
        "height": "76%",
        "toppadding": "12%",
        "bottompadding": "12%"
      },
      {
        "label": "Task",
        "processid": "2",
        "start": "15/12/2020",
        "end": "25/12/2020",
        "id": "2-1",
        "color": "#008ee4",
        "height": "76%",
        "toppadding": "12%",
        "bottompadding": "12%"
      },
      {
        "label": "Task",
        "processid": "3",
        "start": "5/1/2021",
        "end": "15/1/2021",
        "id": "3-1",
        "color": "#008ee4",
        "height": "76%",
        "toppadding": "12%",
        "bottompadding": "12%"
      },
    ]
  };

  dataSource: Object;

  constructor() {
    this.dataSource = {
      "chart": {
      "theme": "fusion",
      "caption": "ShareCloud Task Manager",
      "dateformat": "dd-mm-yyyy",
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

   // Push process to array
   addTask(taskName: string, taskStartDate: string, taskEndDate: string): void {
    const maxValueOfY = Math.max(...this.processes.process.map(o => +o.id + 1), 0); // Get max id from processes.process array and add +1
    this.processes.process.push({label: taskName, id: maxValueOfY.toString()}); // Converts number to string, as id value has to be string
    this.datatable.datacolumn[0].text.push({label: taskStartDate}); // Pushes Start date to array
    this.datatable.datacolumn[1].text.push({label: taskEndDate}); // Pushes End date to array

    const taskStartDateNewFormat = new Date(taskStartDate);
    const taskEndDateNewFormat = new Date(taskEndDate);

    this.tasks.task.push({ // Pushes task color block to table
    "label": taskName,
    "processid":  maxValueOfY.toString(),
    "start": taskStartDateNewFormat.toLocaleDateString("en-GB"),
    "end": taskEndDateNewFormat.toLocaleDateString("en-GB"),
    "id": maxValueOfY.toString() + "-1",
    "color": "#008ee4",
    "height": "76%",
    "toppadding": "12%",
    "bottompadding": "12%"
    });
    console.log(maxValueOfY);
    console.log(this.processes.process);
    console.log(this.datatable.datacolumn[0].text);
    console.log(this.datatable.datacolumn[1].text);
    console.log(this.tasks.task);

   }

   selectTask (task: any) {
    //update the ui
    this.selectedTask = task.id;
    this.selectedTask = task.label;

    this.selectedTaskObject = {
      id: task.id,
      label: task.label,

      startDate: this.datatable.datacolumn[0].text[task.id-1].label,
      endDate: this.datatable.datacolumn[1].text[task.id-1].label,
    }

    console.log(this.selectedTask);

  }
  deleteTask(id: string): void {
    console.log(id);
    this.processes.process.splice(+id-1, 1);
    this.datatable.datacolumn[0].text.splice(+id-1, 1);
    this.datatable.datacolumn[1].text.splice(+id-1, 1);
    this.tasks.task.splice(+id-1, 1);
  }
  updateTask(selectedTaskObjectID: string, editTaskName: string, editTaskStartDate: string, editTaskEndDate: string) {
    console.log(editTaskName, editTaskStartDate, editTaskEndDate );

    this.processes.process[+selectedTaskObjectID-1].label = editTaskName;

    // variable datatable array datacolumn index 0
    this.datatable.datacolumn[0].text[+selectedTaskObjectID-1].label = editTaskStartDate;
    this.datatable.datacolumn[1].text[+selectedTaskObjectID-1].label = editTaskEndDate;

    const taskStartDateNewFormat = new Date(editTaskStartDate);
    const taskEndDateNewFormat = new Date(editTaskEndDate);

    this.tasks.task[+selectedTaskObjectID-1].label = editTaskName;
    this.tasks.task[+selectedTaskObjectID-1].start = taskStartDateNewFormat.toLocaleDateString("en-GB");
    this.tasks.task[+selectedTaskObjectID-1].end = taskEndDateNewFormat.toLocaleDateString("en-GB");

  }

 }


