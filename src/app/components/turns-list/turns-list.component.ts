import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-turns-list',
  templateUrl: './turns-list.component.html',
  styleUrls: ['./turns-list.component.css']
})
export class TurnsListComponent implements OnInit {
  @Input() turns: any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
