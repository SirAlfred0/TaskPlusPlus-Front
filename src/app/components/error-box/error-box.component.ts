import { Component, OnInit, Injectable, Input } from '@angular/core';
import {  } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss']
})


export class ErrorBoxComponent implements OnInit {

  @Input() Message: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
