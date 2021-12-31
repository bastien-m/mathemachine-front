import { Component, OnInit } from '@angular/core';
import { ComputationService } from './computation.service';

@Component({
  selector: 'app-computation',
  templateUrl: './computation.component.html',
  styleUrls: ['./computation.component.scss']
})
export class ComputationComponent implements OnInit {

  isStarted = false
  displayResult = false
  firstNumber = 0
  secondNumber = 0
  operator = ''

  currentResponse = ''

  numberOfAnswers = 0
  numberOfErrors = 0

  average = 0.0

  constructor(private computationService: ComputationService) { }

  ngOnInit(): void {
  }

  start(): void {
    if (this.isStarted) {
      // should display an error
    } else {
      this.average = 0.0
      this.numberOfAnswers = 0
      this.numberOfErrors = 0
      this.isStarted = true
      this.displayResult = false
      this.getNextRound()
    }
  }

  getNextRound(): void {
    this.firstNumber = this.computationService.getNextNumber()
    this.secondNumber = this.computationService.getNextNumber()
    this.operator = this.computationService.getNextOperator()
    this.currentResponse = ''
  }

  verify(): void {
    this.numberOfAnswers++
    const result = this.computationService.compute(this.firstNumber, this.secondNumber, this.operator)
    if (result !== parseInt(this.currentResponse, 10)) {
      this.numberOfErrors++
    }
    this.getNextRound()
  }

  endRound(): void {
    if (!this.isStarted) {
      // should return an error because we can't stop a training without starting it
    } else {
      this.displayResult = true
      this.isStarted = false
      this.average = 100.0 - this.numberOfErrors * 100 / this.numberOfAnswers
    }
  }


}
