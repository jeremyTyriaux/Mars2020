import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.scss']
})
export class TestModelComponent implements AfterViewInit {

  @ViewChild('video',{static:false}) 
  video: ElementRef;


  constructor() { }


  ngAfterViewInit() {
    this.initCam()
  }

   async initCam() {
     const vid = this.video.nativeElement;
    console.log("dans le initCam");
     if (navigator.mediaDevices.getUserMedia) {
       navigator.mediaDevices.getUserMedia({ video: true })
         .then((stream) => {
           console.log('affect cam');
           vid.srcObject = stream;
         })
         .catch((err0r) => {
           console.log('Something went wrong!');
         });
     }
    }


}
