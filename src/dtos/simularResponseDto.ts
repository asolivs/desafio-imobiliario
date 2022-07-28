import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SimularResponseDto {
  @ApiProperty({
    description: 'Propriedade nome',
    required: true,
    example: 'Casa Comercial',
  })
  vencedor: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'valor do alugel da propriedade ',
    required: true,
    example: 1000.0,
  })
  jogadores: string[];
}
