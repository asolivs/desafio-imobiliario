import { ApiProperty } from '@nestjs/swagger';

export enum JOGADORES {
  Cauteloso = 'Cauteloso',
  Aleatorio = 'Aleatorio',
  Exigente = 'Exigente',
  Impulsivo = 'Impulsivo',
}

export class CreatePropriedadeDto {
  @ApiProperty({
    description: 'Propriedade nome',
    required: true,
    example: 'Casa Comercial',
  })
  nome: string;

  @ApiProperty({
    description: 'valor do alugel da propriedade ',
    required: true,
    example: 1000.0,
  })
  aluguel: number;

  @ApiProperty({
    description: 'Valor de compra da propriedade ',
    required: true,
    example: 50.0,
  })
  valor: number;

  @ApiProperty({
    description: 'posicão no tabuleiro',
    required: true,
    example: 1,
  })
  posicao: number;
}

export class PropriedadeDto extends CreatePropriedadeDto {
  dono: JOGADORES;
}
