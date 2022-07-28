import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesafioController } from 'src/controllers/desafio.controller';
import { DesafioService } from 'src/services/desafio.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [DesafioController],
  providers: [DesafioService],
})
export class DesafioModule {}
