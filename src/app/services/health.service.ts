import { Injectable } from '@angular/core';
import { Health } from '../interfaces/health';


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  health: Health = {
    playerHealth: 40,
    monsterHealth: 92
  }
  constructor() { }

  getHealths(): Health {
    return this.health
  }

 onStartHandler() {
   this.health.playerHealth = 100
   this.health.monsterHealth = 100     
 }
 
}

