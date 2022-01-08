import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-darken',
  templateUrl: './darken.component.html',
  styleUrls: ['./darken.component.scss']
})
export class DarkenComponent implements OnInit {

  @Input() Darken = false;

  constructor() { }

  ngOnInit(): void {
  }

}
