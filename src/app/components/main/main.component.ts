import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import {FormControl } from '@angular/forms';
import { ErrorInfo } from './main.component.model';


import {Chart, registerables} from 'chart.js'

Chart.register(...registerables);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})



export class MainComponent implements OnInit, OnDestroy {

  plc = new FormControl('');

  plcList: string[] = ['PLC 1', 'PLC 2', 'PLC 3'];

  status = "Online";
  public config: any = {
    type: 'line',
    data : {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
    label: 'Monthly',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: '#5783f6',
    borderWidth: 2
  }]
},
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true, // Keep the legend visible
          labels: {
            usePointStyle: true, // Use point style for labels instead of rectangles
            padding: 20,
            boxHeight:0 // Adjust padding for better spacing
          }
        }
      }
    },
  };
  chart:any;

  

  errors: ErrorInfo[] = [
    {
      plcId: 1,
      status: "blocked",
      colour: "red",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/cancel-svgrepo-com.svg",
      errorDesc: "Mechanical error with machine moving leftarm.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId: 2,
      status: "starved",
      colour: "yellow",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/exclamation-triangle-svgrepo-com.svg",
      errorDesc: "No product detected on the conveyor belt.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId: 2,
      status: "starved",
      colour: "yellow",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/exclamation-triangle-svgrepo-com.svg",
      errorDesc: "No product detected on the conveyor belt.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:3,
      status: "blocked",
      colour: "red",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/cancel-svgrepo-com.svg",
      errorDesc: "Mechanical error with machine moving leftarm.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:4,
      status: "electrical fault",
      colour: "orange",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/electric-electricity-svgrepo-com.svg",
      errorDesc: "The power supply to the PLC has failed.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:4,
      status: "electrical fault",
      colour: "orange",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/electric-electricity-svgrepo-com.svg",
      errorDesc: "The power supply to the PLC has failed.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:2,
      status: "active",
      colour: "green",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/check-mark-svgrepo-com.svg",
      errorDesc: "The machine is currently active.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:2,
      status: "active",
      colour: "green",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/check-mark-svgrepo-com.svg",
      errorDesc: "The machine is currently active.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:2,
      status: "mechanical fault",
      colour: "red",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/mechanical-arm-svgrepo-com.svg",
      errorDesc: "A mechanical fault has occurred due to a jammed conveyor belt.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
    {
      plcId:2,
      status: "mechanical fault",
      colour: "red",
      filterColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(332deg) brightness(119%) contrast(119%)",
      statusImage: "/assets/mechanical-arm-svgrepo-com.svg",
      errorDesc: "A mechanical fault has occurred due to a jammed conveyor belt.",
      startTime: "04/10/2024 05:29:59",
      endTime: "04/10/2024 05:45:59"
    },
  ]

  plcStatus  = [
    { id: "PLC 1", image: '/assets/check-mark-svgrepo-com.svg', label: 'IN CYCLE', statusValue: "PLC1 Status", colour: "green" },
    { id: "PLC 2", image: '/assets/exclamation-triangle-svgrepo-com.svg', label: 'BLOCKED', statusValue: "PLC2 Status", colour: "yellow"},
    { id: "PLC 3", image: '/assets/cancel-svgrepo-com.svg', label: 'STARVED', statusValue: "PLC3 Status", colour: "red" },
    { id: "PLC 4", image: '/assets/electric-electricity-svgrepo-com.svg', label: 'ELECTRICAL FAULT', statusValue: "PLC4 Status", colour: "orange" },
    { id: "PLC 5", image: '/assets/mechanical-arm-svgrepo-com.svg', label: 'MECHANICAL FAULT', statusValue: "PLC5 Status", colour: "red" }
  ];

  // plcStatusData : any = [
  //   {
  //     plcID : 1, 
  //     plcStatus : 1,
  //   },
  //   {
  //     plcID : 2, 
  //     plcStatus : 3,
  //   },
  //   {
  //     plcID : 3, 
  //     plcStatus : 5,
  //   }
  // ]

  dateTime: Date = new Date();
  isModalOpen: boolean = false;


  openModal() {
    console.log(this.isModalOpen);
    
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.dateTime = new Date();
    this.chart = new Chart('MyChart', this.config)
  }

  ngOnDestroy() {

  }

  scrollTo(sectionId: string) {
    this.router.navigate([], { fragment: sectionId }).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
