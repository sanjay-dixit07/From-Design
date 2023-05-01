import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
  eduboolean=false;
  educationdetails:any=[];
  educationlist:any[]=[]
  
  
  addEducation(value:string,value1:string,value2:string,value3:string){
    this.educationdetails={
      "institutename":value,
      "coursename":value1,
      "score":value3,
      "startdate":value2,
    }
    this.educationlist.push(this.educationdetails);
    this.eduboolean=true;
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  saveData(){
    localStorage.setItem("education",JSON.stringify(this.educationlist));
  }

}
