import { Controller, Post } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
    @Post('/signup')
    createUser(){
        
    }
}
