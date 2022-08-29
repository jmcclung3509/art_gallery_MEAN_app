import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  @Input() superInfo: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
