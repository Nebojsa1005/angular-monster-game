import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() onStartHandler = new EventEmitter()
  @Output() onAttackHandler = new EventEmitter()
  @Output() onSpecialAttackHandler = new EventEmitter()
  @Output() onHealHandler = new EventEmitter()
  @Output() onSurrenderHandler = new EventEmitter()

  @Input() gameStarted: boolean = false

  constructor(private health: HealthService) { }

  ngOnInit(): void {
  }

  onStart() {
    this.onStartHandler.emit()
  }

  attack(): void {
    let playerDamage = Math.floor(Math.random() * 10)
    let monsterDamage = Math.floor(Math.random() * 15)

    this.onAttackHandler.emit({
      playerDamage: playerDamage,
      monsterDamage: monsterDamage
    })
  }

  specialAttack(): void {
    let specialDamage = Math.floor(Math.random() * 30)
    let monsterDamage = Math.floor(Math.random() * 15)
    this.onSpecialAttackHandler.emit({
      specialDamage: specialDamage,
      monsterDamage: monsterDamage
    })
  }

  heal():void {
    let heal = 10
    this.onHealHandler.emit(heal)
  }

  surrender(): void {
    this.onSurrenderHandler.emit()
  }
}
