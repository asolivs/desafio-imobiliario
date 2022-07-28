import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JOGADORES, PropriedadeDto } from 'src/dtos/propriedadeDto';
import { SimularResponseDto } from 'src/dtos/simularResponseDto';

@Injectable()
export class DesafioService {
  constructor() {}

  async simular(): Promise<SimularResponseDto> {
    const RODADAS = parseInt(process.env.RODADAS);
    const PONTUACAO_INICIAL = parseInt(process.env.PONTUACAO_INICIAL);

    let propriedades: PropriedadeDto[] = this.criarPropriedades();
    console.log(`Numero de Proprieadade => ${propriedades.length}`);
    let jogadores = [
      { nome: JOGADORES.Cauteloso, saldo: PONTUACAO_INICIAL, posicao: -1 },
      { nome: JOGADORES.Aleatorio, saldo: PONTUACAO_INICIAL, posicao: -1 },
      { nome: JOGADORES.Exigente, saldo: PONTUACAO_INICIAL, posicao: -1 },
      { nome: JOGADORES.Impulsivo, saldo: PONTUACAO_INICIAL, posicao: -1 },
    ];

    let posicao = [];
    let rodada = 1;
    while (jogadores.length > 1 && rodada < RODADAS + 1) {
      //      console.log(`Rodada => ${rodada}`);
      for (let j = 0; j < jogadores.length; j++) {
        //   console.log(`Inicio da Jogada=> Jogador ${jogadores[j]}`);
        let dado = Math.floor(Math.random() * (6 - 1) + 1);
        jogadores[j].posicao = jogadores[j].posicao + dado;

        if (jogadores[j].posicao >= 20) {
          jogadores[j].saldo = jogadores[j].saldo + 100;
          jogadores[j].posicao = -1;
        } else {
          const { valor, dono, aluguel } = propriedades[jogadores[j].posicao];
          //console.log('propriedade=>', valor, jogadores[j].posicao);
          if (!dono && jogadores[j].saldo >= valor) {
            if (this.verificaSeJogadorComprou(jogadores[j], aluguel, valor)) {
              //console.log(`Jogador comprou => Jogador`);
              propriedades[jogadores[j].posicao].dono = jogadores[j].nome;
              jogadores[j].saldo = jogadores[j].saldo - valor;
            }
          } else if (dono) {
            const jogadorDono = jogadores.find((item) => item.nome === dono);
            jogadorDono.saldo = jogadorDono.saldo + aluguel;
            jogadores[j].saldo = jogadores[j].saldo - aluguel;
            if (jogadores[j].saldo <= 0) {
              posicao.push(jogadores[j].nome as string);
              propriedades = propriedades.map((item) => {
                if (item.dono === jogadores[j].nome) item.dono = undefined;
                return item;
              });
              jogadores.splice(j, 1);
            }
          }
        }
        //console.log(`Fim da Jogada=> Jogador ${JSON.stringify(jogadores[j])}`);
      }
      rodada++;
    }

    let jogadoresNome = jogadores
      .sort(this.oderbyDesc)
      .map((item) => item.nome as string);

    return {
      vencedor: jogadoresNome[0],
      jogadores: jogadoresNome.concat(posicao),
    };
  }

  oderbyDesc(a, b) {
    return b?.valor - a?.valor;
  }

  verificaSeJogadorComprou(jogador, aluguel, valor) {
    if (jogador.nome === JOGADORES.Impulsivo) {
      return true;
    } else if (jogador.nome === JOGADORES.Exigente) {
      if (aluguel > 50) {
        return true;
      }
    } else if (jogador.nome === JOGADORES.Cauteloso) {
      if (jogador.saldo - valor >= 80) {
        return true;
      }
    } else if (jogador.nome === JOGADORES.Aleatorio) {
      let isCompra = Math.floor(Math.random() * (1 - 0));
      if (isCompra) {
        return true;
      }
    }
  }
  criarPropriedades() {
    const VALOR_MINIMO_PROPRIEDADE = parseInt(
      process.env.VALOR_MINIMO_PROPRIEDADE,
    );
    const VALOR_MAXIMO_PROPRIEDADE = parseInt(
      process.env.VALOR_MAXIMO_PROPRIEDADE,
    );
    let propriedades: PropriedadeDto[] = [];
    for (let i = 1; i < 21; i++) {
      let total = Number(
        Math.floor(
          Math.random() *
            (VALOR_MAXIMO_PROPRIEDADE - VALOR_MINIMO_PROPRIEDADE) +
            VALOR_MINIMO_PROPRIEDADE,
        ).toFixed(),
      );
      propriedades.push({
        nome: `propriedade${i}`,
        valor: total,
        aluguel: total * 0.05,
        posicao: i,
        dono: undefined,
      });
    }
    return propriedades;
  }
}
