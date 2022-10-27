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
    const elem:any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

}
