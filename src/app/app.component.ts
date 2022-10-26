import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showpop: boolean = false;
  public envelopEnable: boolean = true;
  ngOnInit(): void {
    setInterval(() => {
      if (window.innerHeight > window.innerWidth) {
        this.showpop = true;
      } else {
        this.showpop = false;
      }
    }, 500);
  }

  clickEnvelop() {
    this.envelopEnable = false;
  }

}
