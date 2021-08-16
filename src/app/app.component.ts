import { Component, OnInit } from '@angular/core';
import { HealthService } from './services/health.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'monster-game';
  gameStarted: boolean = false
  playerHealth: number = 40
  monsterHealth: number = 92
  turns: any[] = []
  constructor(private healthService: HealthService) {}

  ngOnInit() {
  }

  onStart() {
    this.gameStarted = true
    this.playerHealth = 100
    this.monsterHealth = 100
    this.turns = []
  }

  onAttack( data:any ) {
    this.playerHealth -= data.monsterDamage
    this.monsterHealth -= data.playerDamage
    this.turns.push({text: 'You did' + data.playerDamage, isPlayer: true})
    this.turns.push({text: 'Monster did' + data.monsterDamage, isPlayer: false})
  }

  onSpecialAttack(data: any) {
    this.playerHealth -= data.monsterDamage
    this.monsterHealth -= data.specialDamage
    this.turns.push({text: 'You did' + data.specialDamage, isPlayer: true})
    this.turns.push({text: 'Monster did' + data.monsterDamage, isPlayer: false})
  }

  onHeal( data: any ) {
    if (this.playerHealth < 100) {
      this.playerHealth += data 
    } else {
      this.playerHealth = 100
    }
    this.turns.push({text: 'You heald 10 health', isPlayer: true})
  }

  onSurrender(): void {
    this.playerHealth = 0
    this.gameStarted = false
    this.turns.push({text: 'You surrendered!', isPlayer: false})
  }
}
