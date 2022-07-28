import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { DesafioService } from '../services/desafio.service';

@Controller('simular')
export class DesafioController {
  constructor(private simularService: DesafioService) {}

  @Post('simular')
  async simular(@Res() res): Promise<any> {
    const response = await this.simularService.simular();
    return res.status(200).send(response);
  }
}
