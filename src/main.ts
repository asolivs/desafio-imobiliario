import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  console.log(__dirname);
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Desafio Banco Imobiliário')
    .setDescription('Banco Imobiliário')
    .setVersion('1.0')
    .build();
  console.log(__dirname);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
  console.log(`App listen on port ${process.env.PORT}`);
  console.log(`RODADAS ${process.env.RODADAS}`);
  console.log(`PONTUACAO_INICIAL ${process.env.PONTUACAO_INICIAL}`);
  console.log(`NUMERO_DE_FACES_DADO ${process.env.NUMERO_DE_FACES_DADO}`);
  console.log(
    `VALOR_MAXIMO_PROPRIEDADE ${process.env.VALOR_MAXIMO_PROPRIEDADE}`,
  );
  console.log(
    `VALOR_MINIMO_PROPRIEDADE ${process.env.VALOR_MINIMO_PROPRIEDADE}`,
  );
}
bootstrap();
