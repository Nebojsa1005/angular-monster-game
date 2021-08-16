import { Component, Input, OnInit } from '@angular/core';
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-health-bars',
  templateUrl: './health-bars.component.html',
  styleUrls: ['./health-bars.component.css']
})
export class HealthBarsComponent implements OnInit {
  @Input() playerHealth: number = 0
  @Input() monsterHealth: number = 0
  constructor() { }

  ngOnInit(): void {
    
  }


}
