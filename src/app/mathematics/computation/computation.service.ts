import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class ComputationService {

    getNextNumber(): number {
        return Math.round(Math.random() * 9)
    }

    getNextOperator(): string {
        const operators = ['+', '-', '*']
        return operators[Math.round(Math.random() * (operators.length - 1))]
    }

    compute(firstNumber: number, secondNumber: number, operator: string): number {
        switch(operator) {
            case '*':
                return firstNumber * secondNumber
            case '/':
                return firstNumber / secondNumber
            case '+':
                return firstNumber + secondNumber
            case '-':
                return firstNumber - secondNumber
            default:
                throw new Error(`Can't compute opration, you have to provide valid numbers`)
        }
    }

}