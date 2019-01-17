import { Component, OnInit } from '@angular/core';
import { NguiMap } from '@ngui/map'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  center: string;
  map: any;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  initMap(event:any){
    this.map = event;
    google.maps.event.trigger(this.map, 'resize');
  }

}
