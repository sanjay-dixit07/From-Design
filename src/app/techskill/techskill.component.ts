import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techskill',
  templateUrl: './techskill.component.html',
  styleUrls: ['./techskill.component.css']
})
export class TechskillComponent implements OnInit {
  techskilllist:string[]=[];
  techskillboolean=false;
  softskilllist:string[]=[];
  softskillboolean=false;
  langlist:string[]=[];
  langboolean=false;
  addSoftSkill(value:string){
    this.softskilllist.push(value);
    this.softskillboolean=true;
  }
  addTechSkill(value:string){
    this.techskilllist.push(value);
    this.techskillboolean=true;
  }
  addLang(value:string){
    this.langlist.push(value);
    this.langboolean=true;
  }
  constructor() { }

  ngOnInit(): void {
  }
  saveData(){
    localStorage.setItem("techskill",JSON.stringify(this.techskilllist));
    localStorage.setItem("softskills",JSON.stringify(this.softskilllist));
    localStorage.setItem("langlists",JSON.stringify(this.langlist));
  }

}
