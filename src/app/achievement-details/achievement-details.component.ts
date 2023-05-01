import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement-details',
  templateUrl: './achievement-details.component.html',
  styleUrls: ['./achievement-details.component.css']
})
export class AchievementDetailsComponent implements OnInit {
  achdetails:any=[];
  achlist:any[]=[];
  achboolean=false;
  addAchievement(value:string,value1:string,value2:string){
    this.achdetails={
      "achievement":value,
      "description":value1,
      "startdate":value2,
    }
    this.achlist.push(this.achdetails);
    this.achboolean=true;
  }
  constructor() { }

  ngOnInit(): void {
  }
  saveData(){
    localStorage.setItem("achievements",JSON.stringify(this.achlist));
  }

}
