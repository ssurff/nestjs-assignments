import { Controller, Get, Param } from '@nestjs/common';

@Controller('nestjs-assignments')
export class NestjsAssignmentsController {

    private factorial(num: number): number {
        if (num < 0) return -1;
        if (num === 0 || num === 1) return 1;

        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    @Get('factorial-number/:number')
    calculateFactorial(@Param('number') number: string): string {
        const num = parseInt(number);
        if (isNaN(num) || num < 0) {
            return 'Please provide a valid non-negative integer.';
        }

        const result = this.factorial(num);
        return `The factorial of ${num} is ${result}.`;
    }
}


