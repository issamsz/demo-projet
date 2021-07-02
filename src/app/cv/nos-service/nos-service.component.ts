import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-service',
  templateUrl: './nos-service.component.html',
  styleUrls: ['./nos-service.component.css']
})
export class NosServiceComponent implements OnInit {
  counter:number= 0;
  counter1:number= 0;
  counter2:number= 0;
  counter3:number= 0;


  countStop = setInterval(()=>{
  this.counter++;
  if(this.counter===300){
    clearInterval(this.countStop);
  }
},0.2)

countS : any = setInterval(()=>{
  this.counter1++;
  if(this.counter1===257){
    clearInterval(this.countS);
  }
},0.2)

stopCount : any = setInterval(()=>{
  this.counter2++;
  if(this.counter2===500){
    clearInterval(this.stopCount);
  }
},0.2)

stopCounter : any = setInterval(()=>{
  this.counter3++;
  if(this.counter3===420){
    clearInterval(this.stopCounter);
  }
},0.2)






  constructor() {

  }

  ngOnInit(): void {

    const ratio = 0.5
    const options = {

      rootMargin: '0px',
      threshold: ratio
    }

    const handleIntersect= function (entries, observer) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add('revel-visible')
        observer.unobserve(entry.target)

      }
      })

    }

    const observer = new IntersectionObserver(handleIntersect, options)
    document.querySelectorAll('[class*="revel-"]').forEach(function(r) {
      observer.observe(r);
    })
  }



}
