import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import jsPDF, { Html2CanvasOptions, jsPDFAPI } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-resume-display',
  templateUrl: './resume-display.component.html',
  styleUrls: ['./resume-display.component.css']
})
export class ResumeDisplayComponent implements OnInit {
  session:any;
  educationses:any;
  achlist:any;
  achdata:any;
  projlist:any;
  projdata:any;
  techdata:any;
  techlist:any;
  softdat:any;
  softlist:any;
  langdata:any;
  langlist:any;
  data:any;
  edudata:any;
  display=true;
  @ViewChild('print-section',{static:true}) el!:ElementRef<HTMLImageElement>;
  constructor() {
    

   }

  ngOnInit(): void {
    
  }
  setData(){
    this.data=localStorage.getItem("personal");
    this.edudata=localStorage.getItem("education");
   this.session=JSON.parse(this.data)
    this.educationses=JSON.parse(this.edudata);
    this.achlist=localStorage.getItem("achievements");
    this.achdata=JSON.parse(this.achlist);
    this.projdata=localStorage.getItem("projects");
    this.projlist=JSON.parse(this.projdata);
    this.techdata=localStorage.getItem("techskill");
    this.techlist=JSON.parse(this.techdata);
    this.softdat=localStorage.getItem("softskills");
    this.softlist=JSON.parse(this.softdat);
    this.langdata=localStorage.getItem("langlists");
    this.langlist=JSON.parse(this.langdata);

  }
  print(){
  
}
  
}
