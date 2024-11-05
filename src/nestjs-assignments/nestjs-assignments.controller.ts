import { Controller, Get, Param } from '@nestjs/common';

@Controller('nestjs-assignments')
export class NestjsAssignmentsController {

    private isPrime(number: number): boolean {
        if (number <= 1) return false;
        if (number <= 3) return true;           

        if (number % 2 === 0 || number % 3 === 0) return false;

        for (let n = 5; n * n <= number; n += 6) {
            if (number % n === 0 || number % (n + 2) === 0) return false;
        }

        return true;
    }

    @Get('check-prime/:number')
    checkPrime(@Param('number') number: string): string {
        const num = parseInt(number);
        if (isNaN(num)) {
            return 'Please provide a valid number.';
        }

        const result = this.isPrime(num) ? "This is a prime number." : "This is not a prime number.";
        return result;
    }
}
