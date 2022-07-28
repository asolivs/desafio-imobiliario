import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DesafioModule } from './desafio.module';

@Module({
  imports: [ConfigModule.forRoot(), DesafioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
