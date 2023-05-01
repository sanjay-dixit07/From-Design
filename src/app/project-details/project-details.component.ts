import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectdetails:any=[];
  projectlist:any[]=[]
  proboolean=false;
  addProject(value:string,value1:string,value2:string){
    this.projectdetails={
      "projectname":value,
      "description":value1,
      "startdate":value2,
    }
    this.projectlist.push(this.projectdetails);
    this.proboolean=true;
  }
  constructor() { }

  ngOnInit(): void {
  }
  saveData(){
    localStorage.setItem("projects",JSON.stringify(this.projectlist));
  }
}
